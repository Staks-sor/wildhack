from pixellib.instance import instance_segmentation
import tensorflow as tf
from tensorflow.python.tools import module_util as _module_util

def objects_detection_on_an_image():
	segment_image = instance_segmentation()
	segment_image.load_model('C:/Users/stass/Documents/programm/wildhack/mask_rcnn_coco.h5')
	segment_image.segmentImage(
		image_path='tig.png',
		output_image_name='output.jpg'
	)
def main():
	objects_detection_on_an_image()

if __name__ == '__main__':
	main()