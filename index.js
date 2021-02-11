// Import stylesheets
import "./style.css";

// Write Javascript code!

$(document).ready(function() {
  synchronousCall();
});

function getData(ajaxurl) {
  return $.ajax({
    url: ajaxurl,
    type: "GET"
  });
}

async function synchronousCall() {
  try {
    var uri = "https://reqres.in/api/users";
    console.log("1");
    const res = await getData(uri);
    res.data.map(user => {
      console.log(user.email);
    });
    console.log("3");
  } catch (err) {
    console.log(err);
  }
}

function toJSONString(form) {
  var obj = {};
  var elements = form.querySelectorAll("input, select, textarea");
  for (var i = 0; i < elements.length; ++i) {
    var element = elements[i];
    var name = element.name;
    var value = element.value;

    if (name) {
      obj[name] = value;
    }
  }

  return JSON.stringify(obj);
}
