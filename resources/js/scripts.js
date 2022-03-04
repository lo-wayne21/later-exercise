class Header extends React.Component {
  render () {
    return (
      <header>
        <h2>Here’s what you can do <br />with <span>Linkin.bio</span> on Instagram</h2>
      </header>
    );
  }
}

class Intro extends React.Component {
  render() {
    return (
      <section id="block1" class="lp-section intro-section">
        <div class="container">
          <div class="flex-content block1-content">
            <div class="col-2 img-col">
              <picture>
                <source srcset="https://lo-wayne21.github.io/lp-test/resources/images/img--LiB__traffic.png.webp"  type="image/webp"/>
                <source srcset="https://lo-wayne21.github.io/lp-test/resources/images/img--LiB__traffic.png"  type="image/png"/>
                <img src="https://lo-wayne21.github.io/lp-test/resources/images/img--LiB__traffic.png" alt="Image" /> 
              </picture>
            </div>
            <div class="col-1 content-col">
              <h4>Drive traffic and increase sales</h4>
              <p class="text-light">Your Linkin.bio page takes visitors past your profile to anywhere else on the web. Whether that’s a blog post or product page with your latest offer — you decide where your followers go next. Measure, optimize, repeat.</p>
              <a href="#" class="btn">Drive more traffic with Linkin.bio <span class="chevron"><img src="https://lo-wayne21.github.io/lp-test/resources/images/nav-right_1_.png" srcset="https://lo-wayne21.github.io/lp-test/resources/images/nav-right_1_@2x.png 2x" alt=">"/></span></a>
            </div>
          </div>
        </div>
      </section>
    );
  } 
}

class Quote extends React.Component { 
  render() {
    return(
      <div class="col-1 quote-card">
        <div class="inner-card">
          <div class="star-rating">
            <img src="https://lo-wayne21.github.io/lp-test/resources/images/stars.svg" alt="*****" />
          </div>
          <div class="quote-copy">
            <p>{this.props.copy}</p>
          </div>
          <div class="quote-author">
            <img src={this.props.img} alt="headshot" />
            <div class="author-info">
              <h3>{this.props.name}</h3>
              <h4>{this.props.company}</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function Quote_card(props) {
  return(
    <div class="col-1 quote-card">
      <div class="inner-card">
        <div class="star-rating">
          <img src="https://lo-wayne21.github.io/lp-test/resources/images/stars.svg" alt="*****" />
        </div>
        <div class="quote-copy">
          <p>{props.copy}</p>
        </div>
        <div class="quote-author">
          <img src={props.author_img} alt="headshot" />
          <div class="author-info">
            <h3>{props.author_name}</h3>
            <h4>{props.author_company}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

class Testimonials extends React.Component {
  renderQuote(quote) {
    return(
      <Quote_card
        copy={quote.copy}
        author_img={quote.img}
        author_name={quote.name}
        author_company={quote.company}
      />
    );
  }
  
  render() {
    return(
      <section id="testimonials" class="lp-section testimonial-section">
        <div class="container">
          <Quote 
            copy = "“Linkin.bio by Later has been a game-changer for our Instagram strategy and social strategy as a whole, since we can now promote multiple articles a day. Our Instagram traffic has increased 179% YoY largely due to implementing Linkin.bio!”" 
            img = "https://lo-wayne21.github.io/lp-test/resources/images/Linkinbio--testimonial__hannah.png" 
            name = "Hannah Weintraub" 
            company = "WELL + GOOD" 
          />
          {this.renderQuote(
            { copy: "“Linkin.bio has been a game changer for us, successfully allowing us to utilize Instagram as a traffic resource and not just as an engagement resource. We also now have better than ever alignment between our web content and Instagram.”",
              img: "https://lo-wayne21.github.io/lp-test/resources/images/testimonial-brock__highsnobiety.png",
              name: "Brock Cardiner",
              company: "HighSnobiety"
            }
          )} 
          {this.renderQuote(
            { copy: "“Our Marketing Team was on the hunt for an Instagram feed widget to spruce up our website, and coincidentally learned of Linkin.bio Gallery. We especially love that the gallery images are \"clickable\" and can point to unique pages within our site!”",
              img: "https://lo-wayne21.github.io/lp-test/resources/images/Linkinbio--testimonial__kay.png",
              name: "Kay",
              company: "My Salon Desk"
            }
          )} 
        </div>
      </section>
    );
  }
}

class CTA extends React.Component {
  render() {
    return(
      <section id="CTA" class="lp-section cta-section">
        <div class="container">
          <div class="cta-block">
            <h3><span>Wanna know how to put a link in your Instagram bio?</span>That’s easy – just get Linkin.bio by Later (totally free).</h3>
            <div class="btn-container">
              <a href="#" class="btn white-btn">Get Linkin.bio <span class="chevron"><img src="https://lo-wayne21.github.io/lp-test/resources/images/nav-right_1_white.png" srcset="https://lo-wayne21.github.io/lp-test/resources/images/nav-right_1_white@2x.png 2x" alt=">"/></span></a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

class LP extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Intro />
        <Testimonials />
        <CTA />
      </>
    );
  }
}

ReactDOM.render(
  <LP />,
  document.getElementById('landing-page')
);
