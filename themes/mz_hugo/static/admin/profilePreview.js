var ProfilePreview = createClass({
  render: function() {
    var entry = this.props.entry;
    var body = this.props.widgetFor('body');
    var image = entry.getIn(['data', 'image']);
    var profileImage = this.props.getAsset(image);

    return h(
      "div",
      null,
      h(
        "div",
        { "className": "profile-alt" },
        h(
          "div",
          { "className": "profile-alt__content" },
          h(
            "div",
            { "className": "profile-alt__content-header" },
            h(
              "div",
              { "className": "profile-alt__content-image__container" },
              h(
                "div",
                { "className": "profile-alt__content-image" },
                h("img", { src: profileImage.toString(), alt: entry.getIn(['data', 'title']), title: entry.getIn(['data', 'title']) })
              )
            ),
            h(
              "div",
              { "className": "profile-alt__content-resume__container" },
              h(
                "div",
                { "className": "profile-alt__content-resume" },
                h(
                  "div",
                  { "className": "profile-alt__content-resume__name" },
                  h(
                    "h2",
                    null,
                    entry.getIn(['data', 'title'])
                  )
                ),
                h(
                  "h5",
                  { "className": "profile-alt__content-resume__title" },
                  "Profile"
                ),
                h(
                  "div",
                  { "className": "profile-alt__content-resume__item" },
                  h(
                    "svg",
                    { "className": "profile-alt__content-resume__item-time" },
                    h("use", { href: "#time-icon" })
                  ),
                  h(
                    "span",
                    null,
                    "Time in tech "
                  ),
                  entry.getIn(['data', 'timeInTech'])
                ),
                h(
                  "div",
                  { "className": "profile-alt__content-resume__item" },
                  h(
                    "svg",
                    { "className": "profile-alt__content-resume__item-role" },
                    h("use", { href: "#role-icon" })
                  ),
                  h(
                    "span",
                    null,
                    "Current role "
                  ),
                  entry.getIn(['data', 'description'])
                ),
                h(
                  "div",
                  { "className": "profile-alt__content-resume__item" },
                  h(
                    "svg",
                    { "className": "profile-alt__content-resume__item-origin" },
                    h("use", { href: "#origin-icon" })
                  ),
                  h(
                    "span",
                    null,
                    "Place of origin "
                  ),
                  entry.getIn(['data', 'timeInTech'])
                ),
                h(
                  "div",
                  { "className": "profile-alt__content-resume__item-social" },
                  null
                )
              )
            )
          ),
          h(
            "div",
            { "className": "profile-alt__content-interview" },
            h(
              "h6",
              { "className": "profile-alt__content-interview__title" },
              "Tell us more about you:"
            ),
            body
          ),
          h(
            "div",
            { "className": "profile-alt__content-tags" },
            null
          )
        )
      )
    );
  }
});

CMS.registerPreviewTemplate("profile", ProfilePreview);
CMS.registerPreviewStyle("/css/app.css");
CMS.registerPreviewStyle("https://fonts.googleapis.com/css?family=Lato:300,400,700");