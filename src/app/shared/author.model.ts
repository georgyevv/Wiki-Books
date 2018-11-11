export class AuthorModel {
    constructor(
        public id?: string,
        public title?: string,
        public gendre?: string,
        public birthDate?: Date,
        public children?: number,
        public imgUrl?: string) {}
}
