export default function({ store }) {
  store.dispatch("categories/getAll");
}
