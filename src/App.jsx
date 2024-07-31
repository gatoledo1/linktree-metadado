import React, { useEffect } from 'react';

const App = ({ metadata }) => {
  const { profile, links, seo, analytics } = metadata;

  useEffect(() => {
    // Google Analytics
    if (analytics.googleAnalyticsId) {
      window.ga = window.ga || function() { (ga.q = ga.q || []).push(arguments); };
      ga('create', analytics.googleAnalyticsId, 'auto');
      ga('send', 'pageview');
    }
    // Google Gtag
    if(analytics.googleTags?.id) {
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', analytics.googleTags.id);
    }

    // Facebook Pixel
    if (analytics.facebookPixelId) {
      !function(f,b,e,v,n,t,s) {
        if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)
      }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', analytics.facebookPixelId);
      fbq('track', 'PageView');
    }
  }, [analytics]);

  return (
    <div className="container bg" style={{backgroundImage: `url('${profile.background}')`}}>
      <img src={profile.image} alt="Profile" width={150} height={150} className="profile-image z-index" />
      <h1 className="z-index" style={{color: profile.textColor}}>{profile.title}</h1>
      <p className="z-index" style={{color: profile.textColor}}>{profile.description}</p>
      <div className="links animated fadeInUp">
        {links.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer"
           className="link" style={{backgroundColor: link.bgColor}}>
            <i className={`bx bx-md ${link.icon}`}></i> {link.name}
          </a>
        ))}
      </div>
      <p className='footer' style={{color: profile.textColor}}>{profile.copyright}</p>
    </div>
  );
};

export default App;
