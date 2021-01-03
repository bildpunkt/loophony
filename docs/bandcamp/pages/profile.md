# Profile Pages

This page details what data we can get from profile pages and how we can get it.

**Note:** All examples on this page are coming from an authenticated session using my personal account (pixeldesu). Without a logged in user,
some structures might either not be present at all or incomplete.

## Table of Contents

* [Fan Data](#fan-data)
* [Collection Items](#collection-items)
* [Followers](#followers)
* [Following (Bands)](#following-bands)
* [Following (Fans)](#following-fans)
* [Following (Genres)](#following-genres)

## Fan Data

**Request required?:** No.

**Login/Session Required:** No.

**Location:** `window.FanData`

**Example:** [pixeldesu](https://bandcamp.com/pixeldesu)

```json
{
  "following_genres_count":0,
  "website_url":"http://pixelde.su",
  "trackpipe_url":"https://bandcamp.com/pixeldesu",
  "raw_location":"Germany",
  "location":"Germany",
  "fan_id":326076,
  "fav_genre":"Electronic",
  "is_own_page":true,
  "bio":"he/him | web dev/high level/reverse engineering | rhythm game enthusiast",
  "subscriptions_count":0,
  "username":"pixeldesu",
  "following_bands_count":47,
  "followers_count":35,
  "name":"pixeldesu",
  "following_fans_count":12,
  "photo":{
    "image_id":14208403,
    "width":600,
    "height":600
  }
}
```

## Collection Items

This is only initial data supplied on page load. To get all collection items `CollectorsAPI` should be used!

**Request required?:** No.

**Login/Session Required:** No.

**Location:** `window.ItemCache.collection`

**Example:** [pixeldesu](https://bandcamp.com/pixeldesu)

```json
{
  "a3143392495":{
    "gift_sender_name":null,
    "hidden":null,
    "is_purchasable":true,
    "why":null,
    "featured_track":4239922354,
    "band_name":"Frozen Starfall",
    "service_name":null,
    "message_count":null,
    "band_image_id":null,
    "gift_recipient_name":null,
    "featured_track_is_custom":false,
    "service_url_fragment":null,
    "gift_sender_note":null,
    "is_giftable":true,
    "also_collected_count":249,
    "item_title":"Another Day, Another Dream",
    "tralbum_type":"a",
    "is_subscription_item":false,
    "is_subscriber_only":false,
    "item_art_id":3800218621,
    "gift_id":null,
    "tralbum_id":3143392495,
    "featured_track_url":null,
    "item_id":3143392495,
    "sale_item_type":"p",
    "package_details":null,
    "url_hints":{
      "subdomain":"frozenstarfall",
      "custom_domain":null,
      "slug":"another-day-another-dream",
      "custom_domain_verified":null,
      "item_type":"a"
    },
    "band_id":393799777,
    "album_id":3143392495,
    "item_type":"album",
    "band_location":null,
    "is_private":false,
    "num_streamable_tracks":10,
    "item_url":"https://frozenstarfall.bandcamp.com/album/another-day-another-dream",
    "release_count":null,
    "sale_item_id":120089935,
    "featured_track_title":"Recurring Dream (feat. Selphius)"
  },
  // -- truncated
}
```

## Followers

This is only initial data supplied on page load. To get all followers `FanCollectionAPI` should be used!

**Request required?:** No.

**Login/Session Required:** No.

**Location:** `window.ItemCache.followers`

**Example:** [pixeldesu](https://bandcamp.com/pixeldesu)

```json
{
  "35561":{
    "fan_id":35561,
    "image_id":1216141,
    "location":null,
    "is_following":false,
    "token":"1475529312:35561",
    "date_followed":"03 Oct 2016 21:15:12 GMT",
    "fan_url":null,
    "band_id":null,
    "name":"Jamie Thomson",
    "trackpipe_url":"https://bandcamp.com/wr3tch"
  },
  // -- truncated
}
```

## Following (Bands)

This is only initial data supplied on page load. To get all bands you follow `FanCollectionAPI` should be used!

**Request required?:** No.

**Login/Session Required:** No.

**Location:** `window.ItemCache.following_bands`

**Example:** [pixeldesu](https://bandcamp.com/pixeldesu)

```json
{
  "15904371":{
    "image_id":16231665,
    "location":"Tampa, Florida",
    "is_following":true,
    "art_id":1857815622,
    "token":"1491171376:15904371",
    "date_followed":"02 Apr 2017 22:16:16 GMT",
    "url_hints":{
      "subdomain":"roborobmusic",
      "custom_domain":null
    },
    "band_id":15904371,
    "name":"RoboRob",
    "is_subscribed":null
  },
  // -- truncated
}
```

## Following (Fans)

This is only initial data supplied on page load. To get all fans you follow `FanCollectionAPI` should be used!

**Request required?:** No.

**Login/Session Required:** No.

**Location:** `window.ItemCache.following_fans`

**Example:** [pixeldesu](https://bandcamp.com/pixeldesu)

```json
{
  "2042":{
    "fan_id":2042,
    "image_id":12058130,
    "location":"Accokeek, Maryland",
    "is_following":true,
    "token":"1417877505:2042",
    "date_followed":"06 Dec 2014 14:51:45 GMT",
    "fan_url":null,
    "band_id":null,
    "name":"Mutt",
    "trackpipe_url":"https://bandcamp.com/drummersflow"
  },
  // -- truncated
}
```

## Following (Genres)

This is only initial data supplied on page load. To get all fans you follow `FanCollectionAPI` should be used!

**Request required?:** No.

**Login/Session Required:** No.

**Location:** `window.ItemCache.following_genres`

**Example:** [pixeldesu](https://bandcamp.com/pixeldesu)

```json
{
  "1008":{
    "art_ids":[
      41033511,
      3991065337,
      1024330960,
      456621581
    ],
    "genre_id":0,
    "discover_id":1008,
    "geoname_id":0,
    "location":null,
    "tag_id":4180927977,
    "date":null,
    "is_following":true,
    "format_type":"all",
    "discover_url":null,
    "token":"electronic",
    "display_name":"electronic",
    "name":"Electronic",
    "tag_page_url":"http://bandcamp.com/tag/electronic",
    "norm_name":"electronic"
  },
  // -- truncated
}
```