# TypePlate

A type-safe html template tool for typescript. 

## Installation

```
yarn add type-plate
```

## Usage

```ts
import * as $ from 'type-plate'

export const ast = $.doctype(
  $.html({ lang: "en" })(
    $.meta({ charSet: "utf-8" })(),
    $.meta({
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    })(),
    $.title()("Best Motherfucking Website"),
    $.style()(` 
      body{
          margin:1em auto;
          max-width:40em;
          padding:0 .62em;
          font:1.2em/1.62 sans-serif;
      }
      h1,h2,h3 {
          line-height:1.2;
      }
      @media print{
          body{
              max-width:none
          }
      }
    `),
    $.article()(
      $.header()(
        $.h1()("This is ", $.em()("the best"), " motherfucking website."),
        $.aside()("And it’s fucking perfect.")
      ),
      $.h2()("Seriously, what the fuck else do you want?"),
      $.p()("You keep forgetting. Let me describe the perfect-ass website:"),
      $.ul()(
        $.li()("Shit’s lightweight and loads fast."),
        $.li()("Fits on all your shitty screens."),
        $.li()("Looks the same in all your shitty browsers."),
        $.li()("Accessible to every asshole that visits your site."),
        $.li()(
          "Shit’s legible and gets the fucking point across (if you had one instead of just a 5MB ",
          "background video of hipsters poking at their iPhones)."
        )
      )
    ),
    $.p()(
      "You do it every day. You take ",
      $.a({
        title: "Motherfucking Website",
        href: "http://motherfuckingwebsite.com/"
      })("a fucking masterpiece"),
      "and incrementally ",
      $.a({
        href: "http://bettermotherfuckingwebsite.com",
        title: "Better Motherfucking Website"
      })("ruin it"),
      " for the sake of design. Let me remind you: design is ",
      $.dfn({ title: "design" })(
        "to plan and make something for a specific purpose"
      ),
      ". The most basic purpose of text on a website is to be read. Yet you keep doing shit that gets in the way."
    ),
    $.h3({ id: "grey-text" })("Quit fucking around with grey text."),
    $.p()(
      $.a({
        title: "Contrast Rebellion",
        href: "http://contrastrebellion.com/"
      })("Text contrast is not a bad thing"),
      ". The print on your newspaper is not true black, nor is the text on your screen. These are limitations, ",
      "not ideals. Stop making it worse."
    ),
    $.h3({ id: "remote-fonts" })(
      "Remote fonts are wasting your time and mine."
    ),
    $.p()(
      "Why the fuck are you loading 500kB of font to render 50kB of shitty content? ",
      "Are your users even going to notice that it’s not their default serif or sans-serif? ",
      "Why do you even bother when Chrome is going to render it like ass anyways? Use a, ",
      $.a({
        href:
          "http://www.awayback.com/index.php/2010/02/03/revised-font-stack/",
        title: "Revised Font Stack"
      })("font stack your users already have"),
      "."
    ),
    $.h2()("Your website is more than just HTML."),
    $.h3({ id: "use-https" })("You have no excuse for using HTTP."),
    $.p()(
      "Why are you still delivering sites over HTTP? My shitty Atom 330 CPU from 2008 ",
      "can perform aes-256-cbc encryption via OpenSSL at 110 megabits per second. My ",
      "Xeon E5-2670 CPU without AES-NI enabled hits 444 megabits per second. With AES-NI ",
      "enabled it hits a staggering 2.2 gigabits per second. Your server probably can’t ",
      "even load your stupid fucking JavaScript framework’s dependencies that fast.",
    ),
    $.p()(
      "TLS certificates are cheap. Seriously, you can ",
      $.a({
        href:
          "https://namecheap.pxf.io/c/476972/386170/5618?u=https%3A%2F%2Fwww.namecheap.com%2Fsecurity%2Fssl-certificates%2Fcomodo%2Fpositivessl.aspx",
        title: "COMODO PositiveSSL Certificate via Namecheap"
      })("get them for US$9"),
      ". You paid twice that much for your idiotic domain name. You can even get them for free from ",
      $.a({
        href: "https://letsencrypt.org/",
        title: "Let’s Encrypt Free Certificate Authority"
      })("Let’s Encrypt"),
      "."
    ),
    $.p()(
      "HTTPS ",
      $.a({
        href:
          "https://webmasters.googleblog.com/2014/08/https-as-ranking-signal.html",
        title: "Google announces HTTPS support to affect pagerank"
      })("improves your search ranking"),
      " so people are more likely find your ramblings on the Google. It’s also required for ",
      $.a({
        href: "https://http2.github.io/faq/",
        title: "HTTP/2 Frequently Asked Questions"
      })("HTTP/2 support"),
      " which allows browsers to fetch resources more efficiently."
    ),
    $.h3({ id: "compression" })("This shit is gzipped."),
    $.p()(
      "Your webserver is perfectly capable of compressing HTML. My Atom 330 CPU can perform single-core ",
      $.code()("gzip -6"),
      " on random data at 51 megabits per second. My Xeon E5-2670 from 2012 can do this at 216 megabits per ",
      "second. Your meme website isn’t as random as you think it is and will compress much faster."
    ),
    $.h3({ id: "caching" })("Cache is Money"),
    $.p()(
      "It’s bad enough you’re forcing users to load 5MB of hero image and JavaScript framework. Why are you ",
      "making them reload it every time they visit your shitty website? Bandwidth is cheap but it isn’t free. ",
      "Via data charges or waiting, someone is paying for your fucking laziness."
    ),
    $.h2()("This is a website. Look at it. You’ve never seen one before."),
    $.p()(
      "Like the man who’s never grown out his beard has no idea what his true natural state is, you have no ",
      "fucking idea what a website is. All you have ever seen are shitty skeuomorphic bastardizations of what ",
      "should be text communicating a fucking message. This is a real, naked website. Look at it. It’s fucking ",
      "beautiful."
    ),
    $.h3()("Yes, this is fucking satire, you fuck"),
    $.p()(
      "I’m not actually saying your shitty site should look like this. What I’m saying is that all the problems ",
      "we have with websites are ",
      $.strong()("ones we create ourselves"),
      ". Websites aren’t broken by default, they are functional, high-performing, and accessible. You break them. ",
      "You son-of-a-bitch."
    ),
    $.h2()("Even the best can be improved."),
    $.p()(
      "If you can bring this website further beyond perfection, ",
      $.a({
        href: "https://github.com/KeenRivals/bestmotherfucking.website",
        title: "KeenRivals/bestmotherfucking.website on GitHub"
      })("send a pull request on GitHub"),
      "."
    )
  )
);

const html = $.print(ast);
console.log(html);
```
