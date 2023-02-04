import cv2 as cv
import mediapipe as mp
import time
import numpy as np


def isSarpasana():
        try:
            horiz_distance = detector.get_euclidean_distance(0, 16)
            vertical_distance = detector.get_euclidean_distance(28, 16)
            THRESHOLD = 30

            if (2/3*vertical_distance - horiz_distance) <= THRESHOLD:
                return True
            
            return False
        
        except:
            print("NO LANDMARKS DETECTED!!!")


class PoseTracker:
    
    def __init__(self, device_index=0, min_detection_confidence=0.5, min_tracking_confidence=0.5, cam_width=1280, cam_height=800):
        
        self.cap = cv.VideoCapture("predictor/Sarpasana.mp4")
        self.mp_draw = mp.solutions.drawing_utils
        self.mp_pose = mp.solutions.pose
        self.is_correct = False
        self.pose = self.mp_pose.Pose(min_detection_confidence=min_detection_confidence, min_tracking_confidence=min_tracking_confidence)
        self.cap.set(3, cam_width)
        self.cap.set(4, cam_height)

    def display_green(self):
        if not self.is_correct:
            self.is_correct = True

    def display_red(self):
        if self.is_correct:
            self.is_correct = False        

    def detect(self):
        success, self.img = self.cap.read()
        self.shape = self.img.shape
        assert success, 'Could not capture the image correctly'
        img_RGB = cv.cvtColor(self.img, cv.COLOR_BGR2RGB)

        self.results = self.pose.process(img_RGB)

        if self.is_correct:
            drawing_spec = self.mp_draw.DrawingSpec(color = (0, 255, 0))
            self.mp_draw.draw_landmarks(self.img, self.results.pose_landmarks, self.mp_pose.POSE_CONNECTIONS, landmark_drawing_spec=drawing_spec)
            cv.putText(self.img, 'CORRECT POSE', (10,80), cv.FONT_HERSHEY_PLAIN, 2, (0,255,0), 2)


        else:
            self.mp_draw.draw_landmarks(self.img, self.results.pose_landmarks, self.mp_pose.POSE_CONNECTIONS)

    def display(self):
        cv.imshow('Image', self.img)

    
    def get_euclidean_distance(self, l1_index, l2_index):
        h, w, _ = self.shape
        try:
            l1 = self.results.pose_landmarks.landmark[l1_index]
            l2 = self.results.pose_landmarks.landmark[l2_index]

            l1x = l1.x * w
            l2x = l2.x * w

            l1y = l1.y * h
            l2y = l2.y * h

            distance = abs(l1x - l2x), abs(l1y - l2y)

            euclidean = np.sqrt(distance[0]**2 + distance[1]**2)
            return euclidean
        
        except:
            print("NO LANDMARKS DETECTED!")

    def y_distance(self, l1_index, l2_index):
        l1 = self.results.pose_landmarks.landmark[l1_index]
        l2 = self.results.pose_landmarks.landmark[l2_index]

        return abs(l1.y - l2.y)

    def x_distance(self, l1_index, l2_index):
        l1 = self.results.pose_landmarks.landmark[l1_index]
        l2 = self.results.pose_landmarks.landmark[l2_index]

        return abs(l1.x - l2.x)



if __name__ == '__main__':
    detector = PoseTracker()

    while True:
        previous_time = time.time()
        detector.detect()
        detector.display()
        current_time = time.time()
        fps = 1/(current_time-previous_time)

        if isSarpasana():
            detector.display_green()
            print("DETECTED!!!")

        else:
            detector.display_red()
            print("NOT DETECTED!!!")

        cv.waitKey(1)