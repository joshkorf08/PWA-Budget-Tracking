# PWA-Budget-Tracking
Below are examples of the code working offline and changes being cached.

<img width="1349" alt="Screen Shot 2021-04-14 at 6 30 51 PM" src="https://user-images.githubusercontent.com/72220275/114789121-98b6e680-9d50-11eb-8ccd-7c85b63f3528.png">

<img width="1349" alt="Screen Shot 2021-04-14 at 6 31 13 PM-1" src="https://user-images.githubusercontent.com/72220275/114789228-c6039480-9d50-11eb-9e02-dc25fd3f798b.png">

<img width="1285" alt="Screen Shot 2021-04-14 at 6 43 57 PM" src="https://user-images.githubusercontent.com/72220275/114790170-42e33e00-9d52-11eb-995e-c505849340a0.png">


This app uses indexDB, mongodb, to store data when its online and offline. When it's offline it stores all of the information and functions as normal, when it's back online it sends the stored information while it was offline to to the mongo database. It is set up as a PWA and you can install in your computer and it also as a service worker to store cache offline.
