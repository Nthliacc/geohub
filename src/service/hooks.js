import axios from "axios";
import { uri } from "../constants";

export const getMilestone = async (owner, repo, milestone) => {
  const response = await axios
    .get(
      `${uri}/repos/${owner}/${repo}/issues?state=all&milestone=${milestone}`,
      {
        headers: {
          Authorization: "token " + process.env.TOKEN,
        },
      }
    )
    .then((res) => console.log(res));
  return response;
};
