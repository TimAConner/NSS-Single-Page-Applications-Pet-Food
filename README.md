# NSS-Single-Page-Applications-Pet-Food

## Motivation
This was practice done while attending the [Nashville Software School](http://nashvillesoftwareschool.com/).

## Instructions
You are working as a junior developer for Acme, Inc. This company sells dog food. Each brand of dog food is represented by an object in an array you get back from the (fictional database) in JSON format.
1. Build a product page that displays all brands of dog food, the different types, with the price and size for each container volume.
1. Create a second JSON file to represent the new product line for Acme, Inc.
1. Update your page to now show cat food, along with dog food.


## Array Example

```
{
  "dog_brands": [
    {
      "name": "Chuck wagon",
      "types": [
        {
          "type": "all_natural",
          "volumes": [
            {
              "name": "32oz",
              "price": 9.99
            },
            {
              "name": "64oz",
              "price": 17.99
            }
          ]
        },
        {
          "type": "standard",
          "volumes": [
            {
              "name": "58oz",
              "price": 12.99
            },
            {
              "name": "72oz",
              "price": 21.99
            }
          ]
        }
      ]
    },
    {
      "name": "Purina",
      "types": [
        {
          "type": "puppy",
          "volumes": [
            {
              "name": "16oz",
              "price": 8.99
            },
            {
              "name": "24oz",
              "price": 14.99
            }
          ]
        },
        {
          "type": "standard",
          "volumes": [
            {
              "name": "58oz",
              "price": 19.99
            },
            {
              "name": "72oz",
              "price": 24.99
            }
          ]
        }
      ]
    }
  ]
}
```