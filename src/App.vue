<template>
  <div id="app">

    <a-layout id="components-layout-demo-fixed">
      <a-layout-content :style="{ padding: '50px' }">

        <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">
          <a-page-header
              :style="{paddingLeft: '0'}"
              title="Movies"
              sub-title="List with movies, realtime from Firestore!"
          />

          <a-row>
            <a-col :sm="24" :md="9">
              <div>
                <h2>Add movie</h2>

                <a-input type="text" placeholder="Movie title" name="name" v-model="movieTitle"/>
                <a-textarea
                    :style="{marginTop: '10px'}"
                    v-model="movieDescription"
                    placeholder="Movie description"
                    :auto-size="{ minRows: 3, maxRows: 5 }"
                />
                <a-button :style="{marginTop: '10px'}" @click="addMovie" type="primary">
                  Add movie
                </a-button>
              </div>
            </a-col>
            <a-col :span="15">
              <h2 :style="{marginLeft: '20px'}">Movies list</h2>
              <a-list
                  class="firebase-list"
                  item-layout="horizontal"
                  :data-source="MoviesList"
              >
                <a-list-item slot="renderItem" slot-scope="item">
                  <a slot="actions" @click="deleteMovie(item.id)">Delete</a>
                  <a-list-item-meta :description="item.description">
                    <a slot="title">{{ item.title }}</a>
                  </a-list-item-meta>
                </a-list-item>
              </a-list>
            </a-col>
          </a-row>

        </div>
      </a-layout-content>

    </a-layout>

  </div>
</template>

<style scoped>
.firebase-list {
  padding: 0 20px 0 20px
}
</style>

<script>
import {db} from "./db.js";

export default {
  data() {
    return {
      movieTitle: "",
      movieDescription: "",
      MoviesList: [],
    };
  },

  methods: {
    addMovie() {
      db.collection('movies').add({
        id: new Date().toISOString(),
        title: this.movieTitle,
        description: this.movieDescription
      });
      this.movieTitle = "";
      this.movieDescription = "";
    },
    deleteMovie(id) {
      db.collection('movies').doc(id).delete();
    },
  },

  firestore: {
    MoviesList: db.collection('movies').orderBy('id', "desc"),
  },
};
</script>

<style>
</style>
