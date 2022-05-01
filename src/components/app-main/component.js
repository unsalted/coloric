import { getUnsplash } from "../../services/unsplash/load";
import { colors, debounce } from "../../utils/utils.js";


export default class {
  onInput(input) {

    this.state = {
      colors: colors,
      color: colors[Math.floor(Math.random() * colors.length)],
      query: '',
      images: []
    }
  }

  handleSearchChange({ color, query }) {
    console.log(color, query)
    this.state.color = color ? color : this.state.color;
    this.state.query = query ? query : this.state.query;
  }

  async handleQuery() {
    try {
      let res = await getUnsplash({ color: this.state.color.value, query: this.state.query });
      this.state.images = res.photos.results;
    } catch (err) {
      console.error(err)
    }
  }

};
