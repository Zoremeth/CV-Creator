export class ContactInfo {
    order: Number = 0;
    name: String = '';
    content: String = '';
    icon?: string;
}

export class Jobs {
    timeframe?: string;
    name?: string;
    functions?: string;
}

export class Schools {
    timeframe?: string;
    name?: string;
    level?: string;
}

export class Languages {
    name: String = '';
    progress: Number = 0;
}
