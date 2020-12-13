=== Intergalactic 2 ===
Contributors: automattic
Donate link:
Tags: photoblogging, dark, black, white, one-column, right-sidebar, custom-background, custom-colors, custom-header, custom-menu, featured-image-header, featured-images, flexible-header, post-formats, rtl-language-support, translation-ready, fixed-layout, responsive-layout
Tested up to: 4.2
Stable tag: 3.8
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Intergalactic 2 is based on Underscores http://underscores.me/, (C) 2012-2017 Automattic, Inc.

== Description ==

Intergalactic 2 is a stunning specimen for your personal blog. Bold featured images act as the backdrop to your text, giving you a high-contrast, readable theme that's perfect for making your content pop. The one-column layout provides a distraction-free environment for reading, while the slide-out menu keeps your navigation and secondary content readily accessible.

== Bundled Licenses ==

* Photographs depicted in screenshot.png are from pexels.com and licensed CC0
* Google Font "Lato" is licensed under the SIL Open Font License, Version 1.1; Source: https://www.google.com/fonts/specimen/Lato
* Genericons icon font, Copyright 2013 Automattic; Genericons are licensed under the terms of the GNU GPL, Version 2 (or later); Source: http://www.genericons.com

== Installation ==

1. In your admin panel, go to Appearance -> Themes and click the Add New button.
2. Click Upload and Choose File, then select the theme's .zip file. Click Install Now.
3. Click Activate to use your new theme right away.

== Frequently Asked Questions ==

== Where is my Custom Menu? ==

Intergalactic 2 includes a navigation menu in the slide-out menu, accessed by clicking the hamburger menu (three horizontal lines) in the upper right corner of the header. Custom Menus can be configured by going to Appearance -> Menus in your Dashboard.

== Where can I add widgets? ==

Intergalactic 2 includes a widget area in the slide-out menu, accessed by clicking the hamburger menu (three horizontal lines) in the upper right corner of the header. Widgets can be configured by going to Appearance -> Widgets in your Dashboard.

== Does Intergalactic 2 use Featured Images? ==

Featured Images display best at least 1440px by 900px as a background to the post excerpt and title.

== How can I add a site logo? == 

Brand your site and make it yours by including your business' logo with Jetpack (http://jetpack.me); navigate to Customize → Site Title and upload a logo image in the space provided. The logo will appear next to your site title in the header; it can be any size, but will display at a maximum height of 100 px.

== How can I add links to my social networks? == 

You can add links to a multitude of social services in the slide-out menu using the following steps:

1. Create a new Custom Menu, and assign it to the Social Links menu location.
2. Add links to each of your social services using the Links panel.
3. Icons for your social links will appear in the slide-out menu.

= Quick Specs (all measurements in pixels) =

* The main column width is 660.
* The sidebar width is 600.
* Featured Images are 1440px by 900px

== Changelog ==

= 24 November 2018 =
* Update paragraph styles to no longer use the :not() in the editor styles; that made them too specific, they overrode other styles. Bump version number.

= 21 November 2018 =
* Minor fixes to Gutenberg implementation, including: * Correct selectors for buttons & custom palette colours. * Make sure bullets are centred with centred widgets. * Update comment widget styles to match comments. * Remove empty selectors. * Update verse font styles to italic.

= 8 November 2018 =
* Update JavaScript that makes sure wide image classes aren't added to Gutenberg blocks.

= 7 November 2018 =
* Correct styles used to prevent side scrolling, as they caused the header to be cut off.

= 6 November 2018 =
* Add Gutenberg support to theme.

= 21 May 2018 =
* Fix header image spacing issue in Safari & Firefox

= 3 May 2018 =
* Make sure the background colour will be applied to the content area in Intergalatic 2 when the user doesn't have custom colours.

= 5 April 2018 =
* Optimize images

= 7 March 2018 =
* Improve appearance of contact forms.

= 23 February 2018 =
* Simplify Headstart annotations.

= 20 February 2018 =
* Remove opacity from menu toggle and site title to improve contrast against images.

= 29 January 2018 =
* Adjust cases where min-height is set for the header, so it's not applied when the logo is left-aligned.

= 1 September 2017 =
* Ensure there is no bottom margin on custom logo when no site title/tagline is present on pages with featured images; this was pushing the top of the site down.

= 31 August 2017 =
* Move slide-menu outside of the Header.

= 25 August 2017 =
* Replace line of smarter featured image code that was not compatible with PHP 5.3.x, for backwards compatibility.

= 18 August 2017 =
* Add function to Show/Hide Featured Image outside of the loop.
* Make sure Featured Images on pages can be hidden and toggle the class in the body accordlingly

= 11 July 2017 =
* Removed commented out CSS from changeset 44864

= 4 July 2017 =
* Add hover colours for main navigation and widgets.

= 30 May 2017 =
* Update spacing and styles for Top Posts and Pages, and Recent Comments widgets.
* Add a bit of space below comment avatar on smaller screens.
* Increasing z-index of infinite scroll footer, so it doesn't get overlapped by the posts.

= 2 May 2017 =
* Add screenshot.png

= 28 April 2017 =
* Ensure custom header when set appears on posts and pages that have no featured images.
* Add brighter custom header behind text; change text color when custom header is active.
* More accurate positioning for toggle button on large screens
* Add special notation for sticky posts.
* Cleaner styles for menu toggle to better match overall theme design
* Better styles for archive descriptions
* Fix footer z-index from -1 to 0; -1 was hiding it behind the overlaid page element preventing links and other elements from being click-able.
* Relink correct JS file in functions.php; update media query to align with required window width plus scrollbar in JS
* Rename JS file to match new theme slug
* Account for no results and 404 pages in site branding width change.
* Ensure site branding doesn't run into menu area on single posts on small screens
* Tweaks for logo size and positioning on large and small screens

= 27 April 2017 =
* Updating tags
* Better spacing for custom logo across screen sizes.
* RTL styles; add POT file; begin styling custom logo
* Tweak colors support
* Accurately name slide-out menu; minor style
* Add some more free color palettes

= 26 April 2017 =
* Begin work on colors, fonts, and Headstart annotations.

= 24 April 2017 =
* Tabs instead of spaces for indentation in style.css
* Images should display by default on all archive types.
* Initial commit to repo
