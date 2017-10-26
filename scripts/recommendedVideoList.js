const faker = require('faker');
const Gen = require('sentence-generator');

const text = Gen('./content.txt');

let categories = ['Auto & Vehicles',
                  'Beauty & Fashion',
                  'Comedy',
                  'Education',
                  'Entertainment',
                  'Family Entertainment',
                  'Film & Animation',
                  'Food',
                  'Gaming',
                  'How-to & Style',
                  'Music',
                  'News & Politics',
                  'Nonprofits & Activism',
                  'People & Blogs',
                  'Pets & Animals',
                  'Science & Technology',
                  'Sports',
                  'Travel & Events'
];
let randomIndex = Math.floor(Math.random() * 19);


let date = faker.date.recent();
console.log('date>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', date);

function recommendedVideoList(n) {
  let videoList = [];
  for (let i = 1; i <= n; i++) {
    let eachVideo = {};
    let title = text.take(1);
    let videoId = i;
    // let boolean = [true, false]
    // let randomBoolean = boolean[Math.floor(Math.random()*2)];

    eachVideo.videoId = videoId;
    eachVideo.title = title;
    eachVideo.publisher = faker.name.findName();
    eachVideo.categories = categories[randomIndex];
    eachVideo.views = faker.random.number(5000000);
    eachVideo.likes = faker.random.number(50000);
    eachVideo.dislikes = faker.random.number(10000);
    eachVideo.recommended = true;
    eachVideo.actions = {};

    videoList.push(eachVideo);
  }
  return videoList;
}

console.log('videoList', recommendedVideoList(5));

module.exports = recommendedVideoList;


