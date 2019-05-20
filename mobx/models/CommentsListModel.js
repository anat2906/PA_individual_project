import { types } from "mobx-state-tree";

const CommentsListItem = types
  .model({
    first_name: types.string,
    last_name: types.string,
    text: types.string,
    data: types.string,
    children: types.optional(types.array, []),
    reply_to: types.optional(types.string, "")
  })
  .actions(self => ({
    changeText(new_text) {
      self.text = new_text;
    }
  }));

const CommentsList = types.model({
  items: types.optional(types.array(CommentsListItem), [])
})
.actions(self => ({
  addItem(item){
    self.items.push(item)
  }
}))

export { CommentsList, CommentsListItem };
