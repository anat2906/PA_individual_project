import { types, getParent } from "mobx-state-tree";

const CommentsListItem = types
  .model({
    first_name: types.string,
    last_name: types.string,
    text: types.string,
    date: types.string,
    likes_count: types.optional(types.integer, 0),
    children: types.late(() => {
      return types.array(CommentsListItem);
    }),
    reply_to: types.optional(types.string, "")
  })
  .actions(self => ({
    changeText(new_text) {
      self.text = new_text;
    },
    removeItem(sub_item) {
      self.children = self.children.filter(c => c !== sub_item)
    },
    remove() {
      getParent(self, 2).removeItem(self);
    },
    addlike() {
      self.likes_count++;
      console.log("like");
    },
    createReply(item) {
      self.children.push(item);
    }
  }));

const CommentsList = types
  .model({
    children: types.optional(types.array(CommentsListItem), [])
  })
  .actions(self => ({
    addItem(item) {
      if (item.text) {
        self.children.push(item);
      } else {
        return;
      }
    },
    removeItem(item) {
      self.children = self.children.filter(c => c !== item);
    }
  }));

export { CommentsList, CommentsListItem };
