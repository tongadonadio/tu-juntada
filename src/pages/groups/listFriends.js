import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";

export default function FriendsList() {
  const [friends, setFriends] = React.useState([
    { id: 1, name: "Raphael", lastName: "Murphy", checked: false },
    { id: 2, name: "Azaan", lastName: "Fowler", checked: false },
    { id: 3, name: "Rebekah", lastName: "Vazquez", checked: false },
    { id: 4, name: "Amelia", lastName: "Hancock", checked: false },
    { id: 5, name: "Isra", lastName: "Krueger", checked: false },
  ]);

  const handleToggle = (id) => () => {
    debugger;
    let auxFriends = [...friends];
    let friend = auxFriends.find((f) => f.id === id);
    friend.checked = !friend.checked;
    setFriends(auxFriends);
  };

  return (
    <List dense>
      {friends.map((friend, i) => {
        return (
          <ListItem
            key={i}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(friend.id)}
                checked={friend.checked}
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar alt={"Avatar n°" + i} src={`/`} />
              </ListItemAvatar>
              <ListItemText
                id={i}
                primary={friend.name + " " + friend.lastName}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
