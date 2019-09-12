## Description
This directory contains the python script that we are using inside our website to extract data from a user's social media platform,
for demonstration purposes we have set it up in order to show in what format and what data is exactly being extracted. As of now to keep
it simple we have shown this only for twitter but data extraction for other social media platforms will work in a similar fashion.  
In the production release we can easily switch to transport all this data dynamically between different files and processing will be performed at runtime without the need to store these files, this eliminates any security concerns one can have with the setup.  
We are using the **tweepy library** in our script for the purpose of data mining.  
You may have to acquire access tokens for accessing the twitter API, we are unable to show them because of legal liabilities.  
this script is hardcoded to run demo scrapping for the public tweets for the handle @RahulGandhi, @iamsrk, and @narendramodi and dump them to json files in the same directory...  
to run the file locally simply fill the access token in the source code and in cmd type  
`python './user handle.py'`
