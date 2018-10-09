# [Sample plug-in: Radio Button Validation Plug-in]
## Purpose of the Sample Plug-in
This sample plug-in is available for educational purposes.  
Use this plug-in to understand how Kintone plug-ins work, and how they are structured.
A non-packaged version written with a single JavaScript file can be found here https://developer.kintone.io/hc/en-us/articles/115009412848

## What the plug-in does
This plug-in restricts the user from choosing the first value in the Radio Button field, and displays an error message on the record.
When a user tries to save a record with the first value in the Radio Button field selected, the error message will be displayed and the record will not be saved.
The plug-in settings page allows the user to choose which Radio Button field will be used.

## Plug-in directory structure
This sample plug-in is created with the following directory structure.

src/  
├── html/  
│        └──── config.html  
├── css/  
│        ├──── 51-modern-default.css  
│        └──── config.css  
├── js/  
│        ├──── config.js  
│        └──── desktop.js  
├── image/  
│        └──── check.png  
└── manifest.json  

## How to use
To simply test out the plug-in on your Kintone domain, follow these steps:

1. Download the plug-in zip file  
Reference: https://github.com/kintone/SAMPLE-Radio-button-validation-plug-in/releases
2. Install the plug-in into your domain  
Reference: https://get.kintone.help/hc/en-us/articles/115001519707-Installing-Viewing-Plug-ins
3. Add the plug-in to a specific Kintone App  
Reference: https://get.kintone.help/hc/en-us/articles/115001511188-Adding-Plug-ins-to-an-App
4. Make sure that a Radio Button field with more than one option is placed in the form of your Kintone App. Access the plug-in settings, and enter in the neccessary settings. Save the settings, and update the App.
5. Click the + button on the Record List page to start adding a new record. Try to save the record with the first option selected in the Radio Button field. An error message will be displayed and you will not be able to save the record until a different option is selected.

## How to modify
1. Fork to your repo
2. Make changes to files under /src
3. Repackage the plug-in by:  
 i. Zipping the manifest.json file, css directory, html directory, image directory and js directory into one zip file.  
 ii. Drag and dropping the file into the [kintone plug-in packer](https://kintone.github.io/plugin-packer/).

## Pull Request Policy
As this repo exists for educational purposes, we will most likely turn down pull requests that contain updates with new features.  
Please feel free to host plug-ins with new features on your own repository.  
Bug fixes are happily accepted.
