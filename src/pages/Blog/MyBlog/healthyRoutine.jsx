// src/pages/Blog/MyBlog/healthyRoutine.jsx
import health from "../../../assets/health.jpg";

export default function HealthyRoutine() {
  return (
    <div>
      <h1>Making Time for Simple Exercise</h1>
      <p className="date">Published in 2026</p>
      <img src={health} alt="health" />

      <p>
        In the middle of busy daily activities, we often forget how important it
        is to take care of our health. Many people think exercise requires a lot
        of time and effort, but in reality, small routines can make a big
        difference.
      </p>

      <p>
        Simple activities like walking, stretching, or doing light exercise for
        a few minutes each day can be a powerful investment for our future
        health. It’s not about intensity, but consistency.
      </p>

      <p>
        Taking time to move your body helps improve focus, reduce stress, and
        keep your body active. Even a short walk can refresh your mind and boost
        your energy.
      </p>

      <p>
        In my view, building small healthy habits today is one of the best
        long-term investments we can make for ourselves.
      </p>
    </div>
  );
}
