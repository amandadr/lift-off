# Lift Off

**Lift Off** is a React app featuring a handful of helpful calculators that assist with weight lifting, particularly the parts to do with math! 🧮

## Live Demo

Check it out: <a href="https://lift.amandadroy.com">Lift Off</a>

<img src="https://github.com/amandadr/lift-off/blob/master/public/refs/home.jpg?raw=true" width="900px" height="auto" />

## Features:
- Barbell "Plates per side" calculator, based on total weight including the barbell
- One-rep max calculator, given reps taken to failure at a given weight
- Optimal weight calculator for three different rep ranges, given one rep max weight
- Warm-up sets calculator, based on weight chosen for working sets

## Here's a rundown of how it helps my mornings:

### 🏋️‍♂️ Plates Calculator

I'm walking up to a barbell knowing what I want to lift, but can't seem to finish the math... subtraction is pretty simple, but then I think of warm-ups and efficient plate combinations, lose my total, start over... Not anymore! 

*Input the weight you want to lift and the calculator will tell you what to put on either side of the barbell.*

<img src="https://github.com/amandadr/lift-off/blob/master/public/refs/plates.jpg?raw=true" width="900px" height="auto" />

**Input:** the total weight of your working set, in pounds;

**Output:** plates per side = (total weight - barbell / 2), divided into plate sizes for a 100% dummy-proof workout;

### 😤 One Rep Max Calculator

I'm feeling great by the end of my program, I know I've gotten so much stronger - what better than a one-rep lift test at maximum load and effort to know where I stand? 

Well, keeping my spine in place is very much a priority, so this is! 

*This calculator utilizes 7 of the most popular algorithms to estimate a 1RM based on a personal record at lower loads and higher reps - an exponentially safer alternative to max-load testing!*

<img src="https://github.com/amandadr/lift-off/blob/master/public/refs/orm.jpg?raw=true" width="900px" height="auto" />

**Input:** weight, in pounds or kilograms, and reps taken to failure at that weight;

**Output:** an average of seven one rep max calculations (Brzycki, Epley, Lander, Lombardi, Wathen, Mayhew, O'Conner) to represent your estimated one rep max;

### ✨ Optimal Rep Ranges Calculator

Wait, the program tells me to lift 10lbs less than my max for three sets!? 

Nah. 

*Once you've calculated your estimated one rep max, input that weight here to get a list of recommended loads for three rep ranges to achieve an appropriate challenge and stimulus from your sets (of an average exercise) - never underestimate your strength again!*

<img src="https://github.com/amandadr/lift-off/blob/master/public/refs/reps.jpg?raw=true" width="900px" height="auto" />

**Input:** one rep max weight, in pounds or kilograms;

**Output:** a list of optimal loads for three rep ranges based on percentage calculations - these act as a rough guide for you to work with, opposed to an absolute umbrella solution;

### 📈 Warm Up Sets Calculator

I'm ready to start warming up with the bar; my working set is written in my program yet I feel... empty-headed. 

I want to pyramid up to a new weight and I'm kind of considering a top set, that's too much for an empty head... Easy! 

*Input your working set weight, in lbs or kg, and the calculator will provide novice and advanced recommendations for warm-up loads and recommended reps!*

<img src="https://github.com/amandadr/lift-off/blob/master/public/refs/warmups.jpg?raw=true" width="900px" height="auto" />

**Input:** working set total weight, in pounds or kilograms;

**Output:** a list of reps and pyramid-style warm-up loads for the novice or advanced* category;

*novice category is recommended up to 250lbs, from there try out the advanced recommendation

#### That's all for now, folks :)

Lift Off keeps me on track for time and gains in the early hours when math is hard. 🥸

I could have started waking up early enough to drink coffee before the gym, but instead, I fixed my problems with code 🤓

I hope it helps you get strong, too! 💪🏼

## Getting Started

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/amandadr/lift-off.git
   cd lift-off
   ```

2. **Install Docker (Optional)**

   - Follow the intructions on the ['get Docker' site](https://docs.docker.com/get-docker/).

### Usage

Use the traditional `npm i`, `npm start` combo, or...

#### 1. Build the Docker image:
```bash
docker build -t lift:latest .
```

#### 2. Build the Docker container:
```bash
docker run -d -p 4100:80 --name lift-off lift:latest
```

#### 3. Find the app at localhost:4100 - have fun :)

## Changelog
...
- Updated 2024-05-20:
  - Dockerized the application.