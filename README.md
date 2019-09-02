# Codecool Frontend Assignment - Responsive React Gallery

The goal of this assignment is to assess front-end development skills, decision making and attention to detail. To complete this task the candidate must present a fully functional responsive gallery, taking into consideration both mobile and desktop web platforms. The submitted project should adhere to the requirements listed below.

## Requirements

1. To complete this task, the following libraries / tools should be used:
    - [React](https://reactjs.org/)
    - [Redux](https://redux.js.org/)
    - [Redux Saga](https://redux-saga.js.org/)
    - [Styled Components](https://www.styled-components.com/)
    - Choice of [Reach Router](https://reach.tech/router) / [React Router](https://reacttraining.com/react-router/)
3. The finished project should be handed off in a fashion that makes it simple for us to run and test.
4. Any tool may be used to process code during and after development, but your own setup is preferred over zero-config setups or boilerplates.
5. Any number of additional libraries may be used and their use will be graded based on selection and necessity.
6. The submitted project should be developed with all points included in the project description below.
7. The candidate should create a UI that they find suitable. It should be attractive and usable regardless of device / screen size and orientation.
8. A custom video player should be implemented to play video content.

## Description

This **Responsive React Gallery** is a single-page application through which users are able to access a list of models (performers). By clicking on one of the items in this list, the user is taken to a screen where they have access to the performer's uploaded media, which may be images or videos.

The shape data structure looks something like this:

```
- Model 1
- Model 2
  - Album 1
    - Image 1
    - Image 2
    - Image 3
  - Album 2
  - Album 3
- Model 3
```

The following RESTful endpoint should be used to get a list of performers:

```
[GET] http://0.0.0.0:3001/en/list-page-ajax/show-more-json/0
```

Each performer can have 0 or more albums (folders), each of which contain 1 or more media uploads.

To access the albums of a given performer the following endpoint should be used:

```
[GET] http://0.0.0.0:3001/en/gallery/{{performerName}}/folders
```

Where `performerName` is the actual display name of a performer, e.g.: *MiaValentinaa*.

There will be a folder which contains the videos only. Videos need to be displayed via a custom video player.

Some folders will be private, which is indicated by the following property and value: `"privacy":"exclusive"`. The thumbnail for these folders will be blurred by default. Private folders should be further indicated by having a padlock icon on top of the image.

To get a list of the media uploads inside a folder the following endpoint should be used:

```
[GET] http://0.0.0.0:3001/en/gallery/{{performerName}}/image-folder-content/{{folderId}}
```

Where `performerName` is the actual display name of a performer, e.g.: *MiaValentinaa*

and `folderId` is the `id` property of a folder.

Users should be able to navigate between items in a folder in a straightforward way.

## Workflow

Git should be used as a versioning tool as well as to hand off the finished project.

To get started you will need to clone this repository, which includes the file `server.js`. Before you can access the endpoints above you need to run this via the command: `node server` while in the root directory in this repository.

The project should be pushed to a **private** GitHub repository under your own account and access rights should be granted to members of the DoclerLabs organisation.
