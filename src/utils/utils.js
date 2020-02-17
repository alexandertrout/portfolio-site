const axios = require("axios");

const getInfo = username => {
  return axios
    .get(`https://www.instagram.com/${username}/?__a=1&max_id=<end_cursor>`)
    .then(({ data }) => {
      let URLs = data.graphql.user.edge_owner_to_timeline_media.edges.map(
        item => {
          return item.node.display_url;
        }
      );
      return URLs;
    });
};

module.exports = { getInfo };
