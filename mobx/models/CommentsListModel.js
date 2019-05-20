import { types } from "mobx-state-tree";

const CommentsListItem = types
  .model({
    first_name: types.string,
    last_name: types.string,
    text: types.string,
    date: types.string,
    likes_count: types.optional(types.integer, 0),
    children: types.late(() => {
      return types.array(CommentsListItem)
    }),
    reply_to: types.optional(types.string, "")
  })
  .actions(self => ({
    changeText(new_text) {
      self.text = new_text;
    }
  }));

const CommentsList = types
  .model({
    items: types.optional(types.array(CommentsListItem), [])
  })
  .actions(self => ({
    addItem(item) {
      self.items.push(item);
    }
  }));

export { CommentsList, CommentsListItem };
