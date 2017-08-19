import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      { imageUrl: 'https://www.urlaubsguru.de/wp-content/uploads/2016/03/time-square-new-york-city-istock-487537456-2.jpg', id: 'sadfdsfasasdfa', title: 'Meetup in New York', date: new Date(), location: 'New York', description: 'New York New York' },
      {imageUrl: 'http://www.telegraph.co.uk/content/dam/Travel/2016/August/Paris-travel-AP65117955-xlarge.jpg', id: 'adfasdfdsf', title: 'meetup in paris', date: new Date(), location: 'Paris', description: 'It\'s Paris'}
    ],
    user: {
      id: 'akdfjals',
      registeredMeetups: ['aksdfjkasl']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'dafdfadfda'
      }
      // Reach out to firebase and store it
      commit('createMeetup', meetup)
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featureMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
