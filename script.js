document.addEventListener("DOMContentLoaded", () => {
  const s1 = document.getElementById("step1");
  const s2 = document.getElementById("step2");
  const s3 = document.getElementById("step3");
  const s4 = document.getElementById("step4");
  const s5 = document.getElementById("step5");
  const btn = document.getElementById("replayBtn");

  function triggerSequence() {
    s1.classList.remove("animate-step-1");
    s2.classList.remove("animate-step-2");
    s3.classList.remove("animate-step-3");
    s4.classList.remove("animate-step-4");
    s5.classList.remove("animate-step-5");

    void s1.offsetWidth;

    s1.classList.add("animate-step-1");
    s2.classList.add("animate-step-2");
    s3.classList.add("animate-step-3");
    s4.classList.add("animate-step-4");
    s5.classList.add("animate-step-5");
  }

  triggerSequence();
  btn.addEventListener("click", triggerSequence);
});
