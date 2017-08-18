import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      { imageUrl: 'https://www.urlaubsguru.de/wp-content/uploads/2016/03/time-square-new-york-city-istock-487537456-2.jpg', id: 'sadfdsfasasdfa', title: 'Meetup in New York', date: '2017-07-17' },
      {imageUrl: 'http://www.telegraph.co.uk/content/dam/Travel/2016/August/Paris-travel-AP65117955-xlarge.jpg', id: 'adfasdfdsf', title: 'meetup in paris', date: '2017-07-19'}
    ],
    user: {
      id: 'akdfjals',
      registeredMeetups: ['aksdfjkasl']
    }
  },
  mutations: {},
  actions: {},
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
