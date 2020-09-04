const userReviews = [
  {
    "imageURL": "https://airbnbprojectimages.s3.us-east-2.amazonaws.com/34.jpg",
    "user": "Teresa",
    "date": "2020-05-01T06:00:00.000Z",
    "reviewTxt": "Necessitatibus sunt sapiente consequatur voluptatem. Dolorum nemo sunt soluta veniam expedita qui. Totam odio culpa quod. Autem qui ea. Dolorem minima quis nesciunt qui odit. Deserunt ea dolorem error nam."
  },
  {
    "imageURL": "https://airbnbprojectimages.s3.us-east-2.amazonaws.com/28.jpg",
    "user": "Arlene",
    "date": "2019-12-01T07:00:00.000Z",
    "reviewTxt": "Blanditiis perferendis in iste nisi magni illo eveniet modi. Enim repudiandae laboriosam exercitationem quisquam sed sed nobis soluta. Nihil est ut est non. Fuga consectetur eaque necessitatibus modi pariatur laboriosam non libero."
  },
  {
    "imageURL": "https://airbnbprojectimages.s3.us-east-2.amazonaws.com/32.jpg",
    "user": "Eliseo",
    "date": "2019-09-01T06:00:00.000Z",
    "reviewTxt": "Molestiae enim eaque qui pariatur in eum sunt. Rerum tenetur enim vel odio odit commodi assumenda. Velit voluptas ipsa sunt."
  },
  {
    "imageURL": "https://airbnbprojectimages.s3.us-east-2.amazonaws.com/34.jpg",
    "user": "Bobby",
    "date": "2019-06-01T06:00:00.000Z",
    "reviewTxt": "Aliquam sit dignissimos est odit odio voluptas quis quibusdam. Ut quas eos iste atque. Tempora quo consequuntur voluptatibus. Est error veniam officiis delectus aspernatur sit. Blanditiis cum asperiores quo alias quia eaque id sapiente quia. Quis vitae commodi aut non ut."
  },
  {
    "imageURL": "https://airbnbprojectimages.s3.us-east-2.amazonaws.com/18.jpg",
    "user": "Aaliyah",
    "date": "2019-03-01T07:00:00.000Z",
    "reviewTxt": "In dolorem debitis aut. Esse ut deserunt quod sed inventore labore aliquam laboriosam. Quas quas mollitia qui praesentium corporis soluta quia veniam aut."
  },
  {
    "imageURL": "https://airbnbprojectimages.s3.us-east-2.amazonaws.com/7.jpg",
    "user": "Elliott",
    "date": "2019-02-01T07:00:00.000Z",
    "reviewTxt": "Et at quisquam ipsum occaecati cumque minus dolores. Quia aut at ullam ad. Soluta consequuntur provident sint sit ratione ipsa hic eligendi aut. Dolores nihil ipsam et ut autem aliquam voluptas vitae. Et explicabo neque. Atque quis officiis vel odit."
  },
  {
    "imageURL": "https://airbnbprojectimages.s3.us-east-2.amazonaws.com/12.jpg",
    "user": "Alba",
    "date": "2018-10-01T06:00:00.000Z",
    "reviewTxt": "Omnis in unde ea accusantium sed ipsa odit. Harum sapiente nesciunt voluptatibus laborum quasi. Ad voluptas enim ratione nesciunt cupiditate rerum illo."
  },
  {
    "imageURL": "https://airbnbprojectimages.s3.us-east-2.amazonaws.com/26.jpg",
    "user": "Torrance",
    "date": "2018-10-01T06:00:00.000Z",
    "reviewTxt": "Suscipit impedit sed maxime. Sed sed et accusamus nostrum exercitationem nam aut expedita possimus. Eveniet voluptate nihil recusandae aut qui voluptas vero qui soluta. Rem et doloremque quas. Et corrupti repellat nihil."
  },
  {
    "imageURL": "https://airbnbprojectimages.s3.us-east-2.amazonaws.com/17.jpg",
    "user": "Sofia",
    "date": "2018-09-01T06:00:00.000Z",
    "reviewTxt": "Optio quia in. Maiores voluptas recusandae omnis facilis natus consectetur et temporibus et. Dolores tenetur corrupti eius. Deleniti voluptatem suscipit est tenetur reprehenderit aut officia. Illum maiores asperiores. Facere et eum voluptas quaerat."
  },
  {
    "imageURL": "https://airbnbprojectimages.s3.us-east-2.amazonaws.com/8.jpg",
    "user": "Yadira",
    "date": "2018-06-01T06:00:00.000Z",
    "reviewTxt": "Aut delectus dicta sed totam quaerat fuga harum. Quia aliquam quis. Et quos impedit reprehenderit velit corrupti sunt ut placeat."
  },
  {
    "imageURL": "https://airbnbprojectimages.s3.us-east-2.amazonaws.com/1.jpg",
    "user": "Judge",
    "date": "2018-04-01T06:00:00.000Z",
    "reviewTxt": "Quasi quasi pariatur et velit reprehenderit sint. Aut qui sapiente earum commodi id qui. Ullam eligendi ut. Quidem veniam harum adipisci delectus aliquid possimus similique est."
  },
  {
    "imageURL": "https://airbnbprojectimages.s3.us-east-2.amazonaws.com/16.jpg",
    "user": "Deondre",
    "date": "2018-02-01T07:00:00.000Z",
    "reviewTxt": "Architecto non ut repellendus animi tenetur modi quia blanditiis. Mollitia atque voluptatem voluptas ratione. Aut delectus facilis et. Nihil odio quis quos pariatur pariatur et."
  },
  {
    "imageURL": "https://airbnbprojectimages.s3.us-east-2.amazonaws.com/10.jpg",
    "user": "Lauriane",
    "date": "2017-11-01T06:00:00.000Z",
    "reviewTxt": "Quaerat quam odit recusandae autem eum. Aliquid quod ea repellendus voluptatum non accusantium. Tenetur aut sint aut magnam minima dolorem quae omnis. Et veritatis rerum et. Aut nisi debitis nemo repudiandae pariatur exercitationem voluptatem."
  },
  {
    "imageURL": "https://airbnbprojectimages.s3.us-east-2.amazonaws.com/31.jpg",
    "user": "Akeem",
    "date": "2017-10-01T06:00:00.000Z",
    "reviewTxt": "Repudiandae rem nesciunt beatae nulla. Praesentium quae natus nihil culpa ut. Officia facilis quis et odio voluptas qui. Perspiciatis earum harum sint."
  },
  {
    "imageURL": "https://airbnbprojectimages.s3.us-east-2.amazonaws.com/23.jpg",
    "user": "Laury",
    "date": "2017-10-01T06:00:00.000Z",
    "reviewTxt": "Quisquam inventore id maxime. Inventore natus assumenda temporibus sint. Illo accusamus provident beatae itaque doloremque. Quidem vitae mollitia delectus illo. Eveniet autem sint omnis iusto quidem in alias."
  },
  {
    "imageURL": "https://airbnbprojectimages.s3.us-east-2.amazonaws.com/11.jpg",
    "user": "Olen",
    "date": "2017-08-01T06:00:00.000Z",
    "reviewTxt": "Impedit rerum quasi vel quae. Dicta dolorem soluta nihil temporibus. Asperiores voluptatibus optio impedit numquam aut in. Velit nulla quia iure minima molestias esse et aut unde. Sapiente ea doloribus et consequatur quia quia consequatur. Sint ipsum iure quod dignissimos non."
  },
  {
    "imageURL": "https://airbnbprojectimages.s3.us-east-2.amazonaws.com/22.jpg",
    "user": "Bernita",
    "date": "2017-07-01T06:00:00.000Z",
    "reviewTxt": "Veritatis ut et. Sit et esse sunt eveniet impedit molestiae est. Unde aut aliquid. Tempora magni ullam quia quia labore ipsum."
  },
  {
    "imageURL": "https://airbnbprojectimages.s3.us-east-2.amazonaws.com/2.jpg",
    "user": "Tremayne",
    "date": "2017-06-01T06:00:00.000Z",
    "reviewTxt": "Illo quibusdam doloribus consequatur. Provident quasi consequatur repellendus sunt et alias. Aut sit quod voluptas et aut eaque."
  },
  {
    "imageURL": "https://airbnbprojectimages.s3.us-east-2.amazonaws.com/28.jpg",
    "user": "Sibyl",
    "date": "2017-04-01T06:00:00.000Z",
    "reviewTxt": "Blanditiis deserunt atque voluptatem. Neque dicta laborum. Ut illum aspernatur hic in soluta qui perferendis. Libero rerum eius voluptas adipisci similique minima. Minima quas doloribus consequatur accusantium et soluta nihil ipsa sed."
  },
  {
    "imageURL": "https://airbnbprojectimages.s3.us-east-2.amazonaws.com/18.jpg",
    "user": "Dexter",
    "date": "2017-02-01T07:00:00.000Z",
    "reviewTxt": "Provident unde ut iure temporibus id voluptatem laboriosam. Ratione architecto expedita nihil voluptates et. Quis magni ut repudiandae facere voluptas. Ea atque culpa ad atque asperiores ipsum est. Possimus expedita rerum labore veritatis consectetur iste alias. Enim laudantium non."
  },
  {
    "imageURL": "https://airbnbprojectimages.s3.us-east-2.amazonaws.com/12.jpg",
    "user": "Stephan",
    "date": "2017-01-01T07:00:00.000Z",
    "reviewTxt": "Non est veritatis saepe tempora officia. Ipsa quas et vitae aut velit et quidem asperiores. Unde rerum aut qui neque minima quis hic ut possimus."
  },
  {
    "imageURL": "https://airbnbprojectimages.s3.us-east-2.amazonaws.com/22.jpg",
    "user": "Braeden",
    "date": "2016-12-01T07:00:00.000Z",
    "reviewTxt": "Ea ipsum vel soluta magnam explicabo quam dolorem. Sit voluptates voluptas est et voluptatem. Rem laboriosam ducimus. Atque velit est et sit. In ad voluptatem maiores. Quia enim ex ea nostrum."
  },
  {
    "imageURL": "https://airbnbprojectimages.s3.us-east-2.amazonaws.com/12.jpg",
    "user": "Verona",
    "date": "2016-10-01T06:00:00.000Z",
    "reviewTxt": "Quos nostrum voluptatem quia ipsam delectus. Perspiciatis ad voluptatem veritatis ea tempore. Sed quod alias."
  },
  {
    "imageURL": "https://airbnbprojectimages.s3.us-east-2.amazonaws.com/7.jpg",
    "user": "Vladimir",
    "date": "2016-03-01T07:00:00.000Z",
    "reviewTxt": "Assumenda officiis aut numquam corporis modi fuga omnis iste quisquam. Voluptatem quia distinctio. Architecto corporis sit doloribus qui numquam quia et. Amet fugit et sed error eveniet. Animi voluptates cumque."
  },
  {
    "imageURL": "https://airbnbprojectimages.s3.us-east-2.amazonaws.com/6.jpg",
    "user": "Marion",
    "date": "2016-02-01T07:00:00.000Z",
    "reviewTxt": "Eligendi omnis dicta ex repellendus. Ipsam repellat sit. Provident odit esse iste error cupiditate in quaerat velit. Minus ut quibusdam ut. Maiores natus et minima. Cum sed est beatae excepturi doloribus illo culpa."
  },
  {
    "imageURL": "https://airbnbprojectimages.s3.us-east-2.amazonaws.com/6.jpg",
    "user": "Roxanne",
    "date": "2015-10-01T06:00:00.000Z",
    "reviewTxt": "Voluptas error facere. Laborum velit earum sint. Architecto rem ea recusandae nihil ullam nihil. Facilis est exercitationem dolore a error. Dignissimos temporibus enim assumenda rerum nisi. Fugit impedit at officia placeat dicta culpa et placeat."
  },
  {
    "imageURL": "https://airbnbprojectimages.s3.us-east-2.amazonaws.com/14.jpg",
    "user": "Casper",
    "date": "2015-08-01T06:00:00.000Z",
    "reviewTxt": "Omnis autem expedita. Praesentium dignissimos aspernatur reprehenderit ratione dolore expedita non. Tenetur accusantium non velit veniam ipsa vitae ut consequatur iste. Illo quibusdam maxime architecto aperiam et animi repellendus."
  },
  {
    "imageURL": "https://airbnbprojectimages.s3.us-east-2.amazonaws.com/27.jpg",
    "user": "Delphia",
    "date": "2015-07-01T06:00:00.000Z",
    "reviewTxt": "Mollitia pariatur dolorem cum. Eligendi quia placeat est aspernatur dolorum veritatis similique sit. Id temporibus eum. Voluptas et et."
  },
  {
    "imageURL": "https://airbnbprojectimages.s3.us-east-2.amazonaws.com/2.jpg",
    "user": "Oliver",
    "date": "2015-06-01T06:00:00.000Z",
    "reviewTxt": "Odio rerum dolor laudantium. Eveniet fugit expedita odit vel ut quisquam sunt. Voluptas aut voluptate quis delectus corporis debitis. Sunt autem hic."
  },
  {
    "imageURL": "https://airbnbprojectimages.s3.us-east-2.amazonaws.com/6.jpg",
    "user": "Jesus",
    "date": "2014-04-01T06:00:00.000Z",
    "reviewTxt": "Earum beatae fugiat dignissimos iusto maxime. Nulla blanditiis et velit ea natus esse accusamus. Et ducimus eos qui et eum aperiam eum aliquam. Sunt aut veritatis sit cumque ut dolores explicabo. Odio assumenda vel repellat."
  },
  {
    "imageURL": "https://airbnbprojectimages.s3.us-east-2.amazonaws.com/30.jpg",
    "user": "Erik",
    "date": "2013-12-01T07:00:00.000Z",
    "reviewTxt": "Ullam enim ab corrupti assumenda itaque labore. Iusto eligendi aut qui modi eaque qui incidunt earum. Et et rerum dolorem dolorem sit optio sequi iste illum."
  },
  {
    "imageURL": "https://airbnbprojectimages.s3.us-east-2.amazonaws.com/28.jpg",
    "user": "Monica",
    "date": "2013-09-01T06:00:00.000Z",
    "reviewTxt": "Earum aut eos repellendus molestiae et amet et dolore iste. Ut magnam a id sapiente neque et atque. Aut cupiditate vel et cumque impedit. Ut molestiae dolorum voluptatem doloremque nam quo. Adipisci harum et est. Aut eius nisi eligendi ut."
  },
  {
    "imageURL": "https://airbnbprojectimages.s3.us-east-2.amazonaws.com/7.jpg",
    "user": "Tyra",
    "date": "2013-07-01T06:00:00.000Z",
    "reviewTxt": "Velit explicabo voluptas voluptatum sint molestias qui. Rerum dicta similique sed dolores earum dignissimos. Assumenda harum enim eius qui ullam quasi doloremque ut. Et aspernatur modi voluptatem nam est atque nobis vel aut. Qui sed dolorem et ea praesentium est atque sit."
  },
  {
    "imageURL": "https://airbnbprojectimages.s3.us-east-2.amazonaws.com/12.jpg",
    "user": "Kaitlin",
    "date": "2013-05-01T06:00:00.000Z",
    "reviewTxt": "Qui aut aperiam. Fuga sit voluptatem consectetur. Molestiae deserunt eligendi corporis asperiores cupiditate minima ipsa."
  },
  {
    "imageURL": "https://airbnbprojectimages.s3.us-east-2.amazonaws.com/17.jpg",
    "user": "Delpha",
    "date": "2013-05-01T06:00:00.000Z",
    "reviewTxt": "Fugit qui eaque quas porro laudantium labore et. Qui quas odio officiis sunt atque cupiditate qui quia. Id et sit. Quibusdam tempore expedita quibusdam magnam rerum molestiae pariatur molestias. Qui occaecati modi ut nemo veritatis aut est."
  }
];

module.exports = userReviews;