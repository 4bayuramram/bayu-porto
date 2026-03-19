// src/pages/Blog/MyBlog/sessionHijacking.jsx
import hacker from "../../../assets/hacker.jpg";

export default function SessionHijacking() {
  return (
    <div>
      <h1>How a Simple Mistake Led to an Email Hack</h1>
      <p className="date">Published in 2026</p>
      <img src={hacker} alt="ai" />

      <p>
        Recently, a friend of mine experienced something serious—his email was
        hacked, and until now, he still doesn’t fully understand how it
        happened. However, based on the situation, there is a strong possibility
        that it was caused by session hijacking.
      </p>

      <p>
        The incident started when he installed a cracked application from an
        untrusted source. Without realizing it, the software likely contained
        malware that silently accessed his session data.
      </p>

      <p>
        Session hijacking is a method where an attacker takes over a valid user
        session. Instead of needing your password, they steal your session token
        and gain direct access to your account as if they were you.
      </p>

      <p>
        This is what makes it dangerous—everything looks normal, but your
        account is already compromised behind the scenes.
      </p>

      <p>
        From this experience, there are a few important lessons. Avoid
        installing cracked or unknown software, always log out from important
        accounts, and be careful with suspicious files or links. Using antivirus
        and keeping your system updated also helps reduce risk.
      </p>

      <p>
        This story is a reminder that small actions can lead to serious
        consequences. Hopefully, others can learn from this and avoid making the
        same mistake.
      </p>
    </div>
  );
}
