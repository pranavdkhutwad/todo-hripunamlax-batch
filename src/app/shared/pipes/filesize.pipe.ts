import { Pipe } from '@angular/core';

@Pipe({
    name: 'filesize'
})
export class FileSizePipe {
    transform(fs: number) {
        return (fs / (1024 * 1024)).toFixed(2);
    }
}