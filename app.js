import react from "react";
import reactDom from "react-dom/client";

/**
 * header
 *     -logo
 *      -nav-items
 * body
 *      -search bar
 *      -restaurant cards
 *          -ratings
 *          -price of food
 * footer
 *      -copy rights
 *      -advertisements
 *      -liinks
 *      -adresses
 *      -contact
 *
 */

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          src="https://i.pinimg.com/564x/59/5f/a5/595fa5ffb3d67f62ceabaa0d9a40d1e2.jpg"
          className="logo"
        />
      </div>
      <div className="nav-bar">
        {/* <div className="aboveNav">
                Mana Inti Ruchulu
            </div> */}
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, costForTwoMessage, cuisines, avgRating, areaName } =
    resData?.info;
  return (
    <div className="res-card">
      <img
        className="img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
         cloudinaryImageId
        }
      />

      <h3>{name}</h3>
      <h4>{costForTwoMessage}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{areaName}</h4>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "64914",
      name: "Kerala Panoor Restaurant",
      city: "1",
      slugs: {
        restaurant: "panoor-restaurant-bellandur-bellandursarjapur",
        city: "bangalore",
      },
      cloudinaryImageId: "lgekccbbltrtd4kysjgs",
      address:
        "Devarabeesanahalli Flyover, Devarabisanahalli, Bellandur, Bengaluru, Karnataka 560103",
      locality: "Bellandur",
      areaName: "Bellandur",
      costForTwo: "25000",
      costForTwoMessage: "₹250 FOR TWO",
      cuisines: ["Kerala", "South Indian", "Seafood"],
      avgRating: 4.1,
      feeDetails: {},
      avgRatingString: "4.1",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 59,
        minDeliveryTime: 55,
        maxDeliveryTime: 60,
        lastMileTravel: 8.1,
        serviceability: "SERVICEABLE",
        rainMode: "RAIN_MODE_NONE",
        slaString: "55-60 MINS",
        lastMileTravelString: "8.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        opened: true,
        restaurantClosedMeta: {},
      },
      aggregatedDiscountInfo: {
        visible: true,
      },
      badges: {},
      sld: true,
      aggregatedDiscountInfoV2: {
        visible: true,
      },
      ratingSlab: "RATING_SLAB_5",
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      cartOrderabilityNudgeBanner: {
        parameters: {},
        presentation: {},
      },
      externalRatings: {
        aggregatedRating: {
          rating: "3.9",
          ratingCount: "1K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
  },
  {
    info: {
      id: "690160",
      name: "Grandma's Recipes Kerala Restaurant",
      city: "1",
      slugs: {
        restaurant: "grandma's-recipes-cv-raman-nagar-cv-raman-nagar",
        city: "bangalore",
      },
      cloudinaryImageId: "b550ff45da403dd68ce73bd19d561ce6",
      address:
        "224, 2nd Main Rd, Sakshi Nagar, Pai Layout, Mahadevapura, Bengaluru, Karnataka 560016, India",
      locality: "Sakshi Nagar",
      areaName: "CV Raman Nagar",
      costForTwo: "30000",
      costForTwoMessage: "₹300 FOR TWO",
      cuisines: ["South Indian", "Kerala", "Indian"],
      avgRating: 4,
      feeDetails: {},
      avgRatingString: "4.0",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 51,
        minDeliveryTime: 50,
        maxDeliveryTime: 55,
        lastMileTravel: 9.8,
        serviceability: "SERVICEABLE",
        rainMode: "RAIN_MODE_NONE",
        slaString: "50-55 MINS",
        lastMileTravelString: "9.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        opened: true,
        restaurantClosedMeta: {},
      },
      aggregatedDiscountInfo: {
        visible: true,
      },
      badges: {},
      aggregatedDiscountInfoV2: {
        visible: true,
      },
      ratingSlab: "RATING_SLAB_4",
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      cartOrderabilityNudgeBanner: {
        parameters: {},
        presentation: {},
      },
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
  },
  {
    info: {
      id: "485933",
      name: "Dindigul Thalappakatti",
      cloudinaryImageId: "cluiug5t7vmz7idrhh82",
      locality: "Nexus",
      areaName: "Koramangala",
      costForTwo: "₹500 for two",
      cuisines: ["South Indian", "Biryani", "Chinese", "North Indian"],
      avgRating: 4.2,
      parentId: "332",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      promoted: true,
      adTrackingId:
        "cid=13860689~p=3~adgrpid=13860689#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=485933~eid=140b9451-d79b-4fb2-8782-5686f9ed87f1~srvts=1716874871633~collid=80426",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-28 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
  },
  {
    info: {
      id: "21954",
      name: "SLV Ragigudda",
      cloudinaryImageId: "cdba173526421253fadacfcc3b7ff9f2",
      locality: "9Th Block",
      areaName: "Jayanagar",
      costForTwo: "₹250 for two",
      cuisines: ["South Indian", "Snacks", "North Indian", "Chinese"],
      avgRating: 4.5,
      veg: true,
      parentId: "21601",
      avgRatingString: "4.5",
      totalRatingsString: "10K+",
      promoted: true,
      adTrackingId:
        "cid=13853864~p=6~adgrpid=13853864#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=21954~eid=44ee5cd9-4f73-4743-a517-1abd2c05fd2e~srvts=1716874871633~collid=80426",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-28 21:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  description: "pureveg",
                },
              },
            ],
          },
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
  },
  {
    info: {
      id: "401448",
      name: "Mangaluru Kairuchi",
      cloudinaryImageId: "vlskbsei2zpp3h6ueapc",
      locality: "BTM Layout",
      areaName: "BTM Layout",
      costForTwo: "₹200 for two",
      cuisines: ["Mangalorean", "Seafood", "Coastal", "South Indian"],
      avgRating: 4.2,
      parentId: "250155",
      avgRatingString: "4.2",
      totalRatingsString: "500+",
      promoted: true,
      adTrackingId:
        "cid=13854759~p=8~adgrpid=13854759#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=401448~eid=a3cbf92a-86e0-4398-acc1-a6b548104256~srvts=1716874871633~collid=80426",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 4.1,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-28 15:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹999",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "100+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
  },
  {
    info: {
      id: "325",
      name: "Sree Krishna Kafe",
      cloudinaryImageId: "pgcihyqltzdafiw1nog5",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹137 for two",
      cuisines: ["South Indian"],
      avgRating: 4.6,
      parentId: "898",
      avgRatingString: "4.6",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 0.6,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "0.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-28 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  description: "pureveg",
                },
              },
            ],
          },
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.3",
          ratingCount: "1K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
  },
  {
    info: {
      id: "660675",
      name: "Cafe Amudham",
      cloudinaryImageId: "4a752eab41d8483a070eb0b7840c7cc2",
      locality: "5th Block Kormangala",
      areaName: "Koramangala",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian", "Snacks"],
      avgRating: 4.6,
      veg: true,
      parentId: "396620",
      avgRatingString: "4.6",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-29 00:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                  description: "OnlyOnSwiggy",
                },
              },
            ],
          },
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  description: "",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
  },
  {
    info: {
      id: "224982",
      name: "Oru Vadakkan Cafe",
      cloudinaryImageId: "8cb7408c14bbfcdfb523708ed1300639",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹400 for two",
      cuisines: [
        "Kerala",
        "Biryani",
        "South Indian",
        "Chinese",
        "Seafood",
        "Beverages",
      ],
      avgRating: 4.2,
      parentId: "21205",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-28 23:59:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  description: "",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹115",
        discountTag: "POCKET HERO",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.0",
          ratingCount: "100+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
  },
  {
    info: {
      id: "407900",
      name: "Raghavendra Tiffins",
      cloudinaryImageId: "dwdvqwsvuxo5qajwezvj",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹400 for two",
      cuisines: ["South Indian", "North Indian", "Chinese", "Indian"],
      avgRating: 4.3,
      parentId: "164537",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-28 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  description: "pureveg",
                },
              },
            ],
          },
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  shortDescription: "options available",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                },
              },
            ],
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "1K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
  },
  {
    info: {
      id: "50711",
      name: "Sri Krishna Sagar",
      cloudinaryImageId: "bvyw02kvy1hwy9aae0zd",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian", "North Indian", "Beverages", "Jain"],
      avgRating: 4.3,
      parentId: "3096",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 0.1,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "0.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-28 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  description: "pureveg",
                },
              },
            ],
          },
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  description: "",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.9",
          ratingCount: "50+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">search </div>
      <div className="res-container">
       {
        resList.map((info)=>(<RestaurantCard key={info.info.id} resData={info}/>))
       }
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = reactDom.createRoot(document.getElementById("boot"));
root.render(<AppLayout />);
