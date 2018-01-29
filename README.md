# Social App for ChefIQ
#### This will allow the user (already logged in) to enter/edit recipes

##### User come across this page after they have clicked on their User Profile in the Settings tabs

### Screens:

| Screen Name     | Description |
| ---      | ---       |
| UserChoose | Allows to select a particular user |
| Welcome | Shows the user profile page with picture, basic user profile and list of recipes created by user |
| Edit | Shows the form that allows user to create recipe as well as edit existing recipe |

## Screen Info

### UserChoose
This screen shows:

    Dummy Screen that allows to choose a particular user
    Point of this screen is to show the app can handle multiple user
    Once selected this will show only the user relevant information for this user
        Welcome only shows the user info for the chosen user along with recipes created by the chosen user
        RecipeForm can be same for all users but created/edited recipes wil be associated with the chosen user

### Welcome

This screen shows:

    a. User Picture
    b. User Info with:
        i. User Name
        ii. User Email
        iii. button on a side that gives option to add recipe
        iv. (maybe) button that allows to choose recipes created by other users so this user can improve upon the recipe
                Replace (c) with other user's recipe
    c. List of recipes previously created by user in card format
        i. More option button on the side of the recipe card that shows:
            Share -> Edit -> Delete

### Edit

This screen shows:

    Form that is very similar to the image-9.jpg (sent by Rene)
    If creating then the form will be empty and say "Edit Me" in all the fields
    If editing then the form will be pre-filled with recipe instructions
