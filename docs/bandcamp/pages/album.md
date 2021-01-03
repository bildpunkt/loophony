# Album Pages

This page details what data we can get from album pages and how we can get it.

**Note:** All examples on this page are coming from an authenticated session using my personal account (pixeldesu). Without a logged in user,
some structures might either not be present at all or incomplete.

## Table of Contents

* [Album Information](#album-information)
* [Track Information](#track-information)
* [Package/Merch Information](#package-merch-information)
* [User Collection Information](#user-collection-information)

## Album Information

**Request required?:** No.

**Login/Session Required:** No.

**Location:** `window.TralbumData`

**Example:** [HALCYONDAZE by Halley Labs](https://halleylabs.com/album/halcyondaze)

```json
{
  "FREE": 1, // constant value
  "PAID": 2, // constant value
  "is_bonus":null,
  "has_discounts":false,
  "current": {
    "type":"album",
    "auto_repriced":null,
    "credits":"these albums would not be possible without the ongoing support ...",
    "release_date":"06 Sep 2020 00:00:00 GMT",
    "artist":"KITCALIBER",
    "new_date":"02 Sep 2020 08:44:05 GMT",
    "set_price":7,
    "publish_date":"06 Sep 2020 00:49:37 GMT",
    "download_desc_id":4048491901,
    "minimum_price_nonzero":6.66,
    "upc":null,
    "purchase_url":null,
    "new_desc_format":1,
    "mod_date":"14 Nov 2020 23:08:08 GMT",
    "title":"HALCYONDAZE",
    "audit":0,
    "art_id":1705170049,
    "is_set_price":null,
    "killed":null,
    "purchase_title":null,
    "selling_band_id":4180852708,
    "band_id":4180852708,
    "require_email":null,
    "download_pref":2,
    "private":null,
    "id":691973655,
    "about":"Recorded JAN 2020 - AUG 2020\r\nExclusive license to LAPFOX-HALLEY\r\n\r\n ...",
    "require_email_0":null,
    "featured_track_id":977777297,
    "minimum_price":6.66
  },
  "featured_track_id":977777297,
  "album_release_date":"06 Sep 2020 00:00:00 GMT",
  "is_band_member":null,
  "preorder_count":null,
  "package_associated_license_id":null,
  "licensed_version_ids":null,
  "is_private_stream":null,
  "art_id":1705170049,
  "play_cap_data":{
    "streaming_limits_enabled":false,
    "streaming_limit":3
  },
  "artist":"KITCALIBER",
  "playing_from":"album page",
  "tralbum_subscriber_only":false,
  "last_subscription_item":null,
  "item_type":"album",
  "use_expando_lyrics":true,
  "items_purchased":{
    "packages":{
      "1493172796": true
    },
    "crowdfunding_campaign":{
        
    },
    "bundles":{
        
    }
  },
  "is_purchased":true,
  "for the curious":"https://bandcamp.com/help/audio_basics#steal https://bandcamp.com/terms_of_use",
  "defaultPrice":7,
  "hasAudio":true,
  "initial_track_num":null,
  "album_is_preorder":false,
  "has_video":null,
  "client_id_sig":null,
  "freeDownloadPage":null,
  "is_preorder":false,
  "trackinfo":[], // see "Track Information" for structure
  "id":691973655,
  "url":"https://halleylabs.com/album/halcyondaze",
  "packages":[], // see "Package/Merch Information" for structure
  "tralbum_collect_info": {} // see "User Collection Information" for structure
}
```

## Track Information

**Request Required?:** No.

**Login/Session Required:** No.

**Location:** `window.TralbumData.trackinfo`

**Example:** [log4_SUNLUST by KITCALIBER (HALCYONDAZE)](https://halleylabs.com/album/halcyondaze)

```json
{
  "play_count":null,
  "is_draft":false,
  "free_album_download":false,
  "file":{
    "mp3-128":"https://t4.bcbits.com/stream/c144a362bd1597 ...",
    "mp3-v0":"https://t4.bcbits.com/stream/4e56cccd9711fcb ..."
  },
  "video_caption":null,
  "title_link":"/track/log4-sunlust",
  "is_capped":null,
  "sizeof_lyrics":0,
  "lyrics":null,
  "video_featured":null,
  "has_lyrics":false,
  "video_source_type":null,
  "track_id":977777297,
  "track_license_id":null,
  "alt_link":null,
  "has_info":false,
  "encodings_id":905770152,
  "title":"log4_SUNLUST",
  "video_id":null,
  "video_source_id":null,
  "track_num":1,
  "encoding_error":null,
  "duration":64.9299,
  "is_downloadable":false,
  "private":null,
  "license_type":1,
  "video_mobile_url":null,
  "streaming":1,
  "album_preorder":false,
  "encoding_pending":null,
  "has_free_download":null,
  "id":977777297,
  "video_poster_url":null,
  "unreleased_track":false
}
```

## Package/Merch Information

**Request Required?:** No.

**Login/Session Required:** No.

**Location:** `window.TralbumData.packages`

**Example:** [TWO DISC SET PRE-ORDER (HALCYONDAZE)](https://halleylabs.com/album/halcyondaze)

```json
{
  "quantity_available":0,
  "download_has_audio":true,
  "download_type":"a",
  "origins":[
    {
        "option_id":0,
        "quantity_available":0,
        "quantity":null,
        "package_id":1493172796,
        "quantity_sold":null,
        "id":15538
    }
  ],
  "live_event_url":null,
  "live_event_scheduled_start_date":null,
  "associated_license_id":null,
  "subscriber_only_published":false,
  "new_date":"05 Sep 2020 05:50:15 GMT",
  "release_date":null,
  "live_event_over":null,
  "price":25,
  "desc_pt1":"LIMIT TWO PER BUYER! OPEN UNTIL SEPTEMBER 13th 11:59PM EST!\n\n ...",
  "download_art_id":1705170049,
  "album_art":null,
  "live_event_id":null,
  "subscriber_only":null,
  "type_id":1,
  "limited_checkout":false,
  "album_private":null,
  "fulfillment_days":28,
  "options_title":null,
  "desc_pt2":"the beginning of OCTOBER, and will begin shipping as soon as they arrive! ...",
  "download_artist":"KITCALIBER",
  "upc":null,
  "sku":"",
  "live_event_timezone":null,
  "album_release_date":"06 Sep 2020 00:00:00 GMT",
  "album_publish_date":"06 Sep 2020 00:49:37 GMT",
  "album_artist":"KITCALIBER",
  "album_title":"HALCYONDAZE",
  "quantity_sold":null,
  "download_id":691973655,
  "arts":[
    {
      "image_id":22100842,
      "file_name":"2330164054",
      "crc":565339328,
      "width":1600,
      "index":0,
      "id":1564762992,
      "height":1399
    }
    // -- truncated
  ],
  "currency":"USD",
  "grid_index":0,
  "new_desc_format":1,
  "title":"TWO DISC SET PRE-ORDER",
  "type_name":"Compact Disc (CD)",
  "featured_date":null,
  "edition_size":null,
  "shipping_exception_mode":null,
  "options":null,
  "label":null,
  "is_set_price":null,
  "album_id":691973655,
  "selling_band_id":4180852708,
  "band_id":4180852708,
  "live_event_replays_enabled":null,
  "is_live_ticket":null,
  "private":null,
  "url":"https://lapfox.bandcamp.com/album/halcyondaze",
  "quantity_limits":1,
  "download_url":"https://lapfox.bandcamp.com/album/halcyondaze",
  "description":"LIMIT TWO PER BUYER! OPEN UNTIL SEPTEMBER 13th 11:59PM EST! ...",
  "download_title":"HALCYONDAZE",
  "album_art_id":1705170049,
  "tax_rate":null,
  "album_upc":null,
  "id":1493172796,
  "certified_seller":null,
  "quantity_warning":true,
  "country":null,
  "url_for_app":"https://lapfox.bandcamp.com/album/halcyondaze"
}
```

## User Collection Information

**Request Required?:** No.

**Login/Session Required:** Yes.

**Location:** `window.TralbumData.tralbum_collect_info`

**Example:** [Collection Data for pixeldesu of HALCYONDAZE](https://halleylabs.com/album/halcyondaze)

```json
{
  "collect_item_id":691973655,
  "fan_trackpipe_url":"https://bandcamp.com/pixeldesu",
  "part_of_purchased_album":false,
  "show_collect":true,
  "fan_id":326076,
  "collect_band_id":4180852708,
  "is_collected":true,
  "is_purchased":true,
  "collect_item_type":"album",
  "is_private_fan":false,
  "cfg":{
    "artist_subscriptions":true,
    "fan_signup_use_captcha":true,
    "single_sign_up":true,
    "dupe_purchases_fix":true,
    "mobile_app":true,
    "mobile_onboarding":true,
    "physical_gifting_zip_regex":true,
    "video_sharing":true,
    "physical_gifting":true,
    "header_rework_2018":true,
    "open_signup":true,
    "gifting":true,
    "fan_page_2017":true,
    "tralbum_login":true,
    "stream_buffer_duration_stats":true,
    "gift_cards":true,
    "login_use_captcha":true,
    "no_flash_uploads":true,
    "payment_preference":true
  },
  "user_testing":{
      
  }
}
```