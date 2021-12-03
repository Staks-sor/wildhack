import cv2
import numpy as np

def aplly_yolo_object(image_to_process, objects_count=1):

    global class_index, box
    height, width, depth = image_to_process.shape
    blob = cv2.dnn.blobFromImage(image_to_process, 1 / 255, (608, 608), (0, 0, 0),
                                 swapRB=True, crop=False)
    net.setInput(blob)
    outs = net.forward(out_layers)
    class_indexes, class_scores, boxes = ([] for i in range(3))
    object_count = 0

    for out in outs:
        for obj in out:
            scores = obj[5:]
            class_index = np.argmax(scores)
            class_score = scores[class_index]
            if class_score > 0:
                center_x = int(obj[0] * width)
                center_y = int(obj[1] * height)
                obj_width = int(obj[2] * width)
                obj_height = int(obj[3] * height)
                box = [center_x - obj_width // 2, center_y - obj_height // 2, obj_width, obj_height]
                boxes.append(box)
                class_indexes.append(class_index)
                class_scores.append(float(class_score))


    chosen_boxes = cv2.dnn.NMSBoxes(boxes, class_scores, 0.0, 0.4)
    for box_index in chosen_boxes:
        box_index = box_index[0]
        box = boxes[box_index]
        class_index = class_indexes[box_index]


    if classes[class_index] in classes_to_look_for:
        objects_count += 1
        image_to_process = draw_object_bounding_box(image_to_process, class_index, box)

        final_image = draw_object_count(image_to_process, objects_count)
        return final_image


def draw_object_bounding_box(image_to_process, index, box):


    x, y, w, h = box
    start = (x, y)
    end = (x + w, y + h)
    color = (0, 255, 0)
    width = 2
    final_image = cv2.rectangle(image_to_process, start, end, color, width)

    start = (x, y - 10)
    font_size = 1
    font = cv2.FONT_HERSHEY_SIMPLEX
    width = 2
    text = classes[index]
    final_image = cv2.putText(final_image, text, start, font, font_size, color, width, cv2.LINE_AA)

    return final_image


def draw_object_count(image_to_process, objects_count):


    start = (45, 150)
    font_size = 1.5
    font = cv2.FONT_HERSHEY_SIMPLEX
    width = 3
    text = "Objects found: " + str(objects_count)

    # Вывод текста с обводкой (чтобы было видно при разном освещении картинки)
    white_color = (255, 255, 255)
    black_outline_color = (0, 0, 0)
    final_image = cv2.putText(image_to_process, text, start, font, font_size, black_outline_color, width * 3,
                              cv2.LINE_AA)
    final_image = cv2.putText(final_image, text, start, font, font_size, white_color, width, cv2.LINE_AA)

    return final_image



def start_image_object_detection():
    try:
        image = cv2.imread("assets/bez-nazvanija.png")
        image = aplly_yolo_object(image)
        cv2.imshow("Image", image)
        if cv2.waitKey(0):
            cv2.destroyAllWindows()

    except KeyboardInterrupt:
        pass

if __name__ == '__main__':
    net = cv2.dnn.readNetFromDarknet("yolov4-tiny.weights", "yolov4-tiny.cfg")
    layer_names = net.getLayerNames()
    out_layers_indexes = net.getUnconnectedOutLayers()
    out_layers = [layer_names[index[0] - 1] for index in out_layers_indexes]


    with open("coco.names.txt") as file:
        classes = file.read().split("\n")
    classes_to_look_for = ["animal"]

    start_image_object_detection()