export function RemoteSection() {
  return (
    <section className="remote-section | content-flow">
      <div className="remote-section__content | container">
        <div className="content | content-flow">
          <h1 className="content__title">Make remote work</h1>

          <p className="content__text">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>

          <a href="#" className="button button-dark | mb-50">
            Learn more
          </a>
        </div>

        <div className="partners | flex-group">
          <img src="images\client-databiz.svg" alt="databiz logo" />
          <img src="images\client-audiophile.svg" alt="audiophile logo" />
          <img src="images\client-meet.svg" alt="meet logo" />
          <img src="images\client-maker.svg" alt="maker logo" />
        </div>
      </div>

      <div className="remote-section__hero"></div>
    </section>
  );
}
