// SelectList.ts
export type Option = {
    label: string;
    value: string | number;
  };
  
  export class SelectList {
    private options: Option[];
    private selectedValue: string | number | null = null;
  
    constructor(options: Option[]) {
      this.options = options;
    }
  
    getOptions(): Option[] {
      return this.options;
    }
  
    select(value: string | number): void {
      const found = this.options.find(option => option.value === value);
      if (found) {
        this.selectedValue = value;
      } else {
        throw new Error(`Option with value "${value}" not found.`);
      }
    }
  
    getSelected(): Option | null {
      return this.options.find(option => option.value === this.selectedValue) || null;
    }
  
    clearSelection(): void {
      this.selectedValue = null;
    }
  }
  