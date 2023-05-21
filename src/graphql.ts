import { gql } from "@apollo/client";

interface IItem {
  name: string;
}

interface IComic {
  available: number;
  items: IItem[];
}

interface IThumb {
  path: string;
}

export interface IMarvels {
  id: string;
  name: string;
  description: string;
  thumbnail: IThumb;
  comics: IComic;
}

export const allMarvels = gql`
  query AllMarvels {
    allMarvels {
      id
      name
      description
      thumbnail {
        path
      }
      comics {
        available
        items {
          name
        }
      }
    }
  }
`;

// export const marvel = gql`
//   query Marvel($charId: Int!) {
//     marvel(charId: $charId) {
//       comics {
//         available
//         items {
//           name
//         }
//       }
//     }
//   }
// `;
