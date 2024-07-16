const app = Vue.createApp({
    // Optionen
    data: function () {
      return {
        submissions: submissions, // aus seed.js
        /*       totalVotes: 0, */
      };
    },
    computed: {
      totalVotes() { //berechnet die Gesamtzahl der Stimmen
        // console.log("computed property ausgeführt.");
        return this.submissions.reduce((totalVotes, submission) => {
          return totalVotes + submission.votes;
        }, 0);
      },
      sortedSubmissions() {  // und sortiert nach der Anzahl
        return this.submissions.sort((a, b) => {
          return b.votes - a.votes;
        });
      },
      cardHeaderBackgroundColor() {
        /*       return {
          "bg-primary": this.totalVotes >= 50,
          "text-white": this.totalVotes >= 50,
  
          // Alternative
          // "bg-primary text-white": this.totalVotes >= 50,
        }; */
        if (this.totalVotes >= 50) {
          return ["bg-primary", "text-white"];
        }
      },
      cardTitleFontSize() {
        return { fontSize: this.totalVotes + "px" };
      },
    },
    methods: {
      // Keine Arrow-Fuctions nutzen!!!
      /*     upvote: () => {
        console.log(this);
      }, */
      // Normale Funktionsschreibweise nutzen!!!
      /*     upvote: function () {}, */
      /*     upvote(submissionId) {
        const submission = this.submissions.find(
          (submission) => submission.id === submissionId
        );
        submission.votes++;
  
        // console.log(this);
        //this.submissions[0].votes++;
        /*       console.log(infoText);
        console.log(event); 
      }, */
      /*     logConsole(text) {
        console.log(text);
      }, */
      /*     totalVotes() {
        console.log('Methode ausgeführt.');
        return this.submissions.reduce((totalVotes, submission) => {
          return totalVotes + submission.votes;
        }, 0);
      }, */
    },
  
    watch: {
      /*     submissions(newValue, oldValue) {
        console.log(newValue);
        console.log(oldValue);
      }, */
      /*     submissions: {
        handler(newValue, oldValue) {
          this.totalVotes = this.submissions.reduce((totalVotes, submission) => {
            return totalVotes + submission.votes;
          }, 0);
        },
        deep: true,
        immediate: true,
      },
      totalVotes(newValue, oldValue) {
        console.log(newValue);
        console.log(oldValue);
      }, */
    },
  });
  
  // Globale Component
  app.component("SubmissionListItem", {
    // Optionen
    props: ["submission"],
    methods: {
      /*     upvote(submissionId) {
        const submission = this.submissions.find(
          (submission) => submission.id === submissionId
        );
        submission.votes++;
      }, */
      upvote() {  //erhöht die stimmenanzahl ,wenn Nutzer klickt
        this.submission.votes++;
      },
    },
    template: `
      <div class="d-flex">
        <div class="d-shrink-0">
          <img v-bind:src="submission.img" alt="" />
        </div>
        <div class="flex-grow-1 ms-3">
          <!-- <h5 v-once> -->
          <h5>
            {{ submission.title }}
            <!--  {{ index }} -->
            <!--                       <span
            class="float-end text-primary"
            style="cursor: pointer"
            v-on:click.right="upvote(), logConsole('Stimme abgegeben!')"
            ><i class="fa fa-chevron-up"></i>
            <strong>{{ submissions[0].votes }}</strong></span
          > -->
            <span
              class="float-end text-primary"
              style="cursor: pointer"
              @click="upvote()"
              ><i class="fa fa-chevron-up"></i>
              <strong>{{ submission.votes }}</strong></span
            >
          </h5>
          <!-- <div>{{ submissions[0].desc }}</div> -->
          <div v-html="submission.desc"></div>
          <!--                     <ul>
          <li v-for="(value, key, index) in submission">
            {{ index }} - {{ key }} - {{ value }}
          </li>
        </ul> -->
          <!-- <div v-pre>{{ submissions[0].desc }}</div> -->
          <small class="text-muted"
            >Eingereicht von: {{ submission.author }}</small
          >
          <!--  <input type="text" /> -->
        </div>
      </div>
    `,
  });
  
  // Liefert die Instanz zur Root-Component zurück
  const vm = app.mount("#app");