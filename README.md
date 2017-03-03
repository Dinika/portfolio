This repo contains my web-based portfolio that I'm currently working on. 

#Introduction

Since, this is a jekyll based website, the naming of the folders might seem a tad weird. When you clone this repo on your computer and run jekyll, a folder by the name of '_site' will be created in the folder that contains all these files. Jekyll essentially processes my html, sass, and js files and creates a single html and css file that will be rendered on the browser. (For a better understanding, please visit the official site of Jekyll, available at https://jekyllrb.com/).

The instructions available on the homepage of Jekyll website are Mac/Linux compliant. In case you are having trouble installing Jekyll on Windows, please let me know. I'll soon upload a blog on instructions on how to install jekyll on windows. (Be sure to catch up :-)).


#Directory structure

1. The index.html file contains, what you can call the 'skeleton' of the website. All the files that are mentioned within the '{% %}' braces in index.html can be found in _includes folder. Although, confusing in the beginning, this structure makes the code very modular.

2. _includes - This folder contains the .html files of all the sections on my website. (A folder whose name starts with an underscore is not included within the '_site folder' by jekyll).

3. assets

i. assets > css - Contains the following folders
   > 1-tools - Contains tools such as 'bourbon' for handling cross browser rendering and normalize.scss that contains a file for resetting the browser defaults to my preferences. All these files are included in '_-tools-index.sass'
   > 2-base - Contains files that holds variable names for values that I'm using quite frequently on my website, (such as color values).
   > 3-sections - Contains the sass style sheets for different sections of my website.

All the files are "imported" in main.sass in the css folder and this sass file is converted into main.css file in site folder by jekyll (it can also work with scss, by the way).

ii. assets > img - Contains all the images for the website.


#Sections on my website

1. header - for some basic information on me
2. skills - Lists my skills (ofcourse, only the CS ones)
3. work - showcases some of the stuff that I've done using all of my lovely skills.  
4. paper - Lists all my publications.
5. blog - showcases some articles I've written on my new blog.
6. Contact Information

#Section I'm currently working on
1. Making the header responsive
2. Building the skills section (this time using the mobile first approach).
Visit my [trello board] (https://trello.com/b/jO1qm56Z/web-portfolio).

#Todo

1. Use em and rem
2. Add bourbon mixins
3. Change the text selection colour.
4. Add a loader animation


#For queries or complains please e-mail me at

dinikasaxenas@gmail.com