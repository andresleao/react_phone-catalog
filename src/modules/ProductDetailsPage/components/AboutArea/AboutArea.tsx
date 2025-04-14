import styles from './AboutArea.module.scss';

export const AboutArea = () => {
  return (
    <div className={styles.container}>
      <span className={styles.container__title}>About</span>
      <hr />
      <div className={styles.container__blocks}>
        <div className={styles.container__blocks__item}>
          <span className={styles.container__blocks__item}>
            And then there was Pro
          </span>
          <p>
            A transformative triple‑camera system that adds tons of capability
            without complexity. An unprecedented leap in battery life. And a
            mind‑blowing chip that doubles down on machine learning and pushes
            boundaries of what a smartphone can do. Welcome to the first iPhone
            powerful enough to be called Pro.
          </p>
        </div>

        <div className={styles.container__blocks__item}>
          <span className={styles.container__blocks__item}>Camera</span>
          <p>
            Meet the first triple‑camera system to combine cutting‑edge
            legendary simplicity of iPhone. Capture up to four times more scene.
            scene. Get beautiful images in drastically lower light. Shoot the
            highest‑quality video in a smartphone — then edit with the same you
            love for photos. You’ve never shot with anything like it.
          </p>
        </div>

        <div className={styles.container__blocks__item}>
          <span className={styles.container__blocks__item}>
            Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it.
          </span>
          <p>
            iPhone 11 Pro lets you capture videos that are beautifully true to
            with greater detail and smoother motion. Epic processing power means
            can shoot 4K video with extended dynamic range and cinematic video
            stabilization — all at 60 fps. You get more creative control, too,
            four times more scene and powerful new editing tools to play with.
          </p>
        </div>
      </div>
    </div>
  );
};
