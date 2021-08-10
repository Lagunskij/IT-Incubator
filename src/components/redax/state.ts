import {rerenderEntireTree} from "../../render";

export type MessagesType = {
    id: number
    message: string
}

export type DialogsType = {
    id: number
    name: string
}

export type  PostType = {
    id: number
    message: string
    likes: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPost:string
}

export type DialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
}
/*type SideBarType = {}*/
export type addPostType = () => void
type newPostType = {
    id: number,
    message: postMessagesType,
    likes: number,
}
type postMessagesType = string
export type updateNewPostTextType = (newPost:postMessagesType) => void
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    /*sidebar: SideBarType*/
}

export let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'How are you?', likes: 5},
            {id: 2, message: 'Its my first post', likes: 2},
            {id: 3, message: 'Its tru', likes: 11},
            {id: 4, message: 'Yooo post', likes: 5}
        ],
        newPost: '',
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'POP'},
            {id: 3, message: 'wesd'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'You'},
            {id: 6, message: 'YO YOO TOYOY'}
        ],
        dialogs: [
            {id: 1, name: 'Vano'},
            {id: 2, name: 'Roma'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Alice'},
            {id: 5, name: 'Jura'},
            {id: 6, name: 'Ira'}
        ]
    },
    /*sidebar: {}*/
}
export let addPost:addPostType = () => {
    let newPost:newPostType = {
        id: 5,
        message: state.profilePage.newPost,
        likes:0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPost= ''
    rerenderEntireTree(state);
}

export const updateNewPostText = (newPostText: postMessagesType) => {
    state.profilePage.newPost = newPostText
    rerenderEntireTree(state)
}

export default state;
