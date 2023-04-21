export interface Volume {
    allowAnonLogging: boolean;
    authors: string[] | undefined;
    canonicalVolumeLink: string;
    categories: string[] | undefined;
    contentVersion: string;
    description: string;
    imageLinks:
        | {
              smallThumbnail: string;
              thumbnail: string;
          }
        | undefined;
    industryIdentifiers: {
        type: string;
        identifier: string;
    }[];
    infoLink: string;
    language: string;
    maturityRating: string;
    pageCount: number;
    panelizationSummary: {
        containsEpubBubbles: boolean;
        containsImageBubbles: boolean;
    };
    previewLink: string;
    printType: string;
    publishedDate: string;
    publisher: string;
    readingModes: {
        image: boolean;
        text: boolean;
    };
    title: string;
}

export interface AccessInfo {
    accessViewStatus: string;
    country: string;
    embeddable: boolean;
    ebub: {
        isAvailable: boolean;
    };
    pdf: {
        isAvailable: boolean;
    };
    publicDomain: boolean;
    quoteSharingAllowed: boolean;
    textToSpeechPermission: string;
    viewability: string;
    webReaderLink: string;
}

export interface SaleInfo {
    buyLink: string;
    country: string;
    isEbook: boolean;
    listPrice: {
        amount: number;
        currencyCode: string;
    };
    offers: {
        finskyOfferType: number;
        listPrice: {
            amountInMicros: number;
            currencyCode: string;
        };
        retailPrice: {
            amountInMicros: number;
            currencyCode: string;
        };
    }[];
    retailPrice: {
        amount: number;
        currencyCode: string;
    };
    saleability: string;
}

export interface GoogleBook {
    accessInfo: AccessInfo;
    etag: string;
    id: string;
    kind: string;
    saleInfo: SaleInfo;
    searchInfo: {
        textSnippet: string;
    };
    selfLink: string;
    volumeInfo: Volume;
}
