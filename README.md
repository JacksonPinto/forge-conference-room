# Forge Conference Room Viewer

This project lets you load a Revit model of a conference room in Autodesk Forge Viewer and control room options in real time.

## Features

- Display model from BIM 360
- Toggle visibility of TV and projector
- Choose table layout (centered or against wall)

## Setup

1. Clone this repo
2. Run `npm install`
3. Copy `.env.example` to `.env` and fill in your Forge credentials
4. Replace `YOUR_URN_HERE` in `public/viewer.js` with your model URN
5. Run `npm start`
6. Visit `http://localhost:3000`
