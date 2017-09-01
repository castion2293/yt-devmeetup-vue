<template>
  <v-container>
      <v-layout row wrap v-if="loading">
        <v-flex xs12 class="text-xs-center">
          <v-progress-circular
            indeterminate
            class="primary--text"
            :width="7"
            :size="70"></v-progress-circular>
        </v-flex>
      </v-layout>
      <v-layout row wrap v-else>
          <v-flex xs12>
              <v-card>
                  <v-card-title>
                    <h6 class="primary--text">{{ meetup.title }}</h6>
                    <template v-if="userIsCreator">
                      <v-spacer></v-spacer>
                      <app-edit-meetup-details-dialog :meetup="meetup"></app-edit-meetup-details-dialog>
                    </template>
                  </v-card-title>
                  <v-card-media
                    :src="meetup.imageUrl"
                    height="400px"
                  >
                  </v-card-media>
                  <v-card-text>
                    <div class="info--text">{{ meetup.date | date }} - {{ meetup.location }}</div>
                    <div>
                      <app-edit-meetup-date-dialog
                        :meetup="meetup"
                        v-if="userIsCreator"></app-edit-meetup-date-dialog>
                      <app-edit-meetup-time-dialog
                        :meetup="meetup"
                        v-if="userIsCreator"></app-edit-meetup-time-dialog>
                    </div>
                    <div>{{ meetup.description }}</div>
                  </v-card-text>
                  <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn class="primary">Register</v-btn>
                  </v-card-actions>
              </v-card>
          </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    props: ['id'],
    computed: {
      ...mapGetters({
        meetupfind: 'loadedMeetup',
        user: 'user',
        loading: 'loading'
      }),

      meetup () {
        // return this.$store.getters.loadedMeetup(this.id)
        return this.meetupfind(this.id)
      },
      userIsAuthenticated () {
        return this.user !== null && this.user !== undefined
      },
      userIsCreator () {
        if (!this.userIsAuthenticated) {
          return false
        }
        return this.user.id === this.meetup.creatorId
      }
    }
  }
</script>

