import os
import tweepy
import time
import numpy as np
import json
import time
from random import randint, random

api_key = 'XXXXXXXXXXXXXXXXXXXXXXXXXXX'
secret_key = 'XXXXXXXXXXXXXXXXXXXXXXXXXXX'
access_token = 'XXXXXXXXXXXXXXXXXXXXXXXXXXX'
secret_token = 'XXXXXXXXXXXXXXXXXXXXXXXXXXX'

def authenticate(api_key, secret_key, access_token, secret_token):

    auth = tweepy.OAuthHandler(api_key, secret_key)
    auth.set_access_token(access_token, secret_token)
    api = tweepy.API(auth, 
                     wait_on_rate_limit=True, 
                     wait_on_rate_limit_notify=True)
  
    return api


api = authenticate(api_key, secret_key, access_token, secret_token)
userids =['narendramodi','RahulGandhi','iamsrk']

def all_tweet(user_name):
    d={}
    
    # f.write("\n\nNEXT USER\n\n")
    # f.write(user_name)
    # f.write("\n\n\n")
    # count=1
    # f.write(str(count)+': ')
    for tweet in tweepy.Cursor(api.user_timeline,id=user_name, tweet_mode="extended").items(100):

        # Remove retweets
        # if tweet._json['text'].startswith('RT'):
        #     continue
        # # Remove replies
        # elif tweet._json['text'].startswith('@'):
        #     continue
        

        #value format: ['Fri Sep 06 21:30:50 +0000 2019', 1170086983193907200, '1170086983193907200',
        #'Congratulations to the team at #ISRO for their incredible work on the Chandrayaan 2 Moon Mission. Your passion &amp; dedication is an inspiration to every Indian. Your work is not in vain. It has laid the foundation for many more path breaking &amp; ambitious Indian space missions. 🇮🇳',
        #False, [0, 285], {'hashtags': [{'text': 'ISRO', 'indices': [31, 36]}], 'symbols': [], 'user_mentions': [], 'urls': []}, '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>', None, None, None, None, None, {'id': 3171712086, 'id_str': '3171712086', 'name': 'Rahul Gandhi', 'screen_name': 'RahulGandhi', 'location': '12, Tughlak Lane, New Delhi', 'description': 'This is the official account of Rahul Gandhi | Member of the Indian National Congress| Member of Parliament', 'url': 'https://t.co/SEtVql2yKs', 'entities': {'url': {'urls': [{'url': 'https://t.co/SEtVql2yKs', 'expanded_url': 'http://www.inc.in', 'display_url': 'inc.in', 'indices': [0, 23]}]}, 'description': {'urls': []}}, 'protected': False, 'followers_count': 10587510, 'friends_count': 312, 'listed_count': 2635, 'created_at': 'Sat Apr 25 06:39:15 +0000 2015', 'favourites_count': 348, 'utc_offset': None, 'time_zone': None, 'geo_enabled': False, 'verified': True, 'statuses_count': 4384, 'lang': None, 'contributors_enabled': False, 'is_translator': False, 'is_translation_enabled': False, 'profile_background_color': 'C0DEED', 'profile_background_image_url': 'http://abs.twimg.com/images/themes/theme1/bg.png', 'profile_background_image_url_https': 'https://abs.twimg.com/images/themes/theme1/bg.png', 'profile_background_tile': False, 'profile_image_url': 'http://pbs.twimg.com/profile_images/974851878860312582/O-Zn2b72_normal.jpg', 'profile_image_url_https': 'https://pbs.twimg.com/profile_images/974851878860312582/O-Zn2b72_normal.jpg', 'profile_banner_url': 'https://pbs.twimg.com/profile_banners/3171712086/1430826926', 'profile_link_color': '1DA1F2', 'profile_sidebar_border_color': 'C0DEED', 'profile_sidebar_fill_color': 'DDEEF6', 'profile_text_color': '333333', 'profile_use_background_image': True, 'has_extended_profile': True, 'default_profile': True, 'default_profile_image': False, 'following': True, 'follow_request_sent': False, 'notifications': False, 'translator_type': 'none'}, None, None, None, None, False, 12411, 97147, False, False, 'en']
        



        values=list(tweet._json.values())
        d[str(values[0][:-11])]=""
        for i in list(values[3]):
            if (i!="\n"):
                try:                         
                    d[str(values[0][:-11])]+=i
                except:
                    continue
    name=str(user_name)+'tweets.json'
    print (name)
    with open(name,'w') as f:
        json.dump(d,f)
    time.sleep(random() / 5)

for i in userids:
    all_tweet(i)
    