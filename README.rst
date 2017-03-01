==========================================================
Doctor Who? (Mobile App) - Reactive Core Architecture Demo
==========================================================

This application is the mobile app demo for the **"Reactive Core Architecture"**
explained in this article: https://goo.gl/uN3QPK


Architecture Overview
=====================

The **"Reactive Core Architecture"** allows to structure a project for both a
multi-platform mobile application and a web application, keeping the business
logic of the application in a single, self-contained, reusable and maintainable
submodule.

This architecture is composed by three modules:

1. **The core:** Includes the business logic and the state of the application. This component is implemented using the Redux framework. Code reuse is done via this module. It's added to the mobile app and to the web app as a git submodule.

    See: https://github.com/kuralabs/reactive-core-doctor-who-core


2. **The mobile app:** Implemented using the React Native framework. This application is in the repository you are seeing right now.

3. **The web application:** Implemented using the React framework.

    See: https://github.com/kuralabs/reactive-core-doctor-who-web


.. image:: docs/images/reactive-core-demo-img.jpg



Build and run
=============

Install npm modules::

    npm install

Link assets and packages (Explained below)::

    react-native link


To run the iOS app::

    react-native run-ios


To run the Android app::

    react-native run-android



Dependencies and fonts
======================

This project uses React Native Vector Icons package and a custom font family
(Fira Sans). In order for both to work properly you need to execute the following
command to link them to the project::

    react-native link


The custom fonts files are in the `fonts` folder in the root of the project.

**Note:** In iOS you need to delete the contents of `ios/build` folder and rebuild
the application after executing the above command.


Data source
===========

The data used for this example was taken from IGN article "Doctor Who? A guide to all the
doctors".

http://www.ign.com/articles/2015/08/26/doctor-who-a-guide-to-all-the-doctors


License
=======

::

   Copyright (C) 2017 Carolina Aguilar Segura

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing,
   software distributed under the License is distributed on an
   "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   KIND, either express or implied.  See the License for the
   specific language governing permissions and limitations
   under the License.