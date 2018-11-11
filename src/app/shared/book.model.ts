export class BookModel {
    constructor(
        public title?: string,
        public description?: string,
        public authors?: string[],
        public publisher?: string,
        public publishDate?: Date,
        public language?: string,
        public pages?: number,
        public genre?: string,
        public price?: number,
        public imgUrl?: string,
        public id?: string,
        public isbn?: string,
        public coverType?: string
    ) {}
}
