/**
 * Using jQuery create on click "Hello button" show "hello" text and hide "good bye"
 */
const helloBtnRef = $('#hello-btn');
const goodbyeBtnRef = $('#goodbye-btn');

const helloImgRef = $('#hello-img');
const goodbyeImgRef = $('#goodbye-img');

goodbyeImgRef.hide();
helloBtnRef.hide();

helloBtnRef.click(() => {
  goodbyeImgRef.hide();
  helloImgRef.show();
  helloBtnRef.hide();
  goodbyeBtnRef.show();
});

goodbyeBtnRef.click(() => {
  goodbyeImgRef.show();
  helloImgRef.hide();
  goodbyeBtnRef.hide();
  helloBtnRef.show();
});
