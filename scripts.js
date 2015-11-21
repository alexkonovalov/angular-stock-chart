var app = angular.module('myApp', []);;
app.service("dataProviderService", function () {

        //mock method for returning fake data
        this.GetStockData = function(dateFrom, dateTo) {

            var data = [
               {  date: 'Jan 01, 2014', yield: 170.3, spread: 29.04, price: 24.39 },
                { date: 'Jan 02, 2014', yield: 160.8, spread: 67.82, price: 97.13 },
                { date: 'Jan 03, 2014', yield: 147.87, spread: 179.85, price: 125.82 },
                { date: 'Jan 04, 2014', yield: 11.7, spread: 91.62, price: 177.51 },
                { date: 'Jan 05, 2014', yield: 173.86, spread: 23.88, price: 188.88 },
                { date: 'Jan 06, 2014', yield: 60.04, spread: 28.44, price: 122.66 },
                { date: 'Jan 07, 2014', yield: 138.91, spread: 34.59, price: 24.43 },
                { date: 'Jan 08, 2014', yield: 25.96, spread: 115.74, price: 181.17 },
                { date: 'Jan 09, 2014', yield: 179.76, spread: 117.53, price: 32.6 },
                { date: 'Jan 10, 2014', yield: 114.87, spread: 148.94, price: 53.36 },
                { date: 'Jan 11, 2014', yield: 142.99, spread: 113.22, price: 163.04 },
                { date: 'Jan 12, 2014', yield: 41.04, spread: 68.81, price: 151.58 },
                { date: 'Jan 13, 2014', yield: 162.91, spread: 170.41, price: 22.96 },
                { date: 'Jan 14, 2014', yield: 160.58, spread: 60.16, price: 67.7 },
                { date: 'Jan 15, 2014', yield: 188.74, spread: 90.57, price: 196.43 },
                { date: 'Jan 16, 2014', yield: 126.86, spread: 188.05, price: 111.41 },
                { date: 'Jan 17, 2014', yield: 130.61, spread: 30.45, price: 75.48 },
                { date: 'Jan 18, 2014', yield: 11.01, spread: 30.95, price: 192.93 },
                { date: 'Jan 19, 2014', yield: 181.31, spread: 84.59, price: 175.09 },
                { date: 'Jan 20, 2014', yield: 41.39, spread: 120.9, price: 93.22 },
                { date: 'Jan 21, 2014', yield: 197.98, spread: 43.75, price: 143.15 },
                { date: 'Jan 22, 2014', yield: 81.04, spread: 177.02, price: 67.91 },
                { date: 'Jan 23, 2014', yield: 102.34, spread: 113.27, price: 163 },
                { date: 'Jan 24, 2014', yield: 105.07, spread: 108.89, price: 18.59 },
                { date: 'Jan 25, 2014', yield: 188.13, spread: 38.83, price: 88.96 },
                { date: 'Jan 26, 2014', yield: 164.41, spread: 174.26, price: 75.82 },
                { date: 'Jan 27, 2014', yield: 99.37, spread: 76.41, price: 141.19 },
                { date: 'Jan 28, 2014', yield: 85.83, spread: 19.79, price: 175.18 },
                { date: 'Jan 29, 2014', yield: 57.96, spread: 111.53, price: 76.4 },
                { date: 'Jan 30, 2014', yield: 103.68, spread: 47.04, price: 51.71 },
                { date: 'Jan 31, 2014', yield: 189.8, spread: 154.95, price: 39.18 },
                { date: 'Feb 01, 2014', yield: 139.29, spread: 192.77, price: 185.69 },
                { date: 'Feb 02, 2014', yield: 22.86, spread: 85.67, price: 197.19 },
                { date: 'Feb 03, 2014', yield: 96.29, spread: 104.87, price: 165.51 },
                { date: 'Feb 04, 2014', yield: 41.31, spread: 172.04, price: 50.07 },
                { date: 'Feb 05, 2014', yield: 63.59, spread: 68.66, price: 49.79 },
                { date: 'Feb 06, 2014', yield: 187.61, spread: 76.93, price: 182.35 },
                { date: 'Feb 07, 2014', yield: 74.46, spread: 73.3, price: 39.47 },
                { date: 'Feb 08, 2014', yield: 173.62, spread: 15.44, price: 170.12 },
                { date: 'Feb 09, 2014', yield: 106.86, spread: 65.16, price: 188.24 },
                { date: 'Feb 10, 2014', yield: 109.9, spread: 88.19, price: 114.17 },
                { date: 'Feb 11, 2014', yield: 150.64, spread: 104.78, price: 29.99 },
                { date: 'Feb 12, 2014', yield: 81.41, spread: 123.82, price: 131.06 },
                { date: 'Feb 13, 2014', yield: 93.51, spread: 24.74, price: 199.96 },
                { date: 'Feb 14, 2014', yield: 39.05, spread: 159.47, price: 138.04 },
                { date: 'Feb 15, 2014', yield: 142.64, spread: 185.01, price: 162.73 },
                { date: 'Feb 16, 2014', yield: 29.66, spread: 142.48, price: 156.46 },
                { date: 'Feb 17, 2014', yield: 145.19, spread: 162.51, price: 82.43 },
                { date: 'Feb 18, 2014', yield: 22.28, spread: 156.73, price: 179.22 },
                { date: 'Feb 19, 2014', yield: 148.42, spread: 37.85, price: 103.3 },
                { date: 'Feb 20, 2014', yield: 168.06, spread: 104.82, price: 89.15 },
                { date: 'Feb 21, 2014', yield: 40.59, spread: 182.24, price: 41 },
                { date: 'Feb 22, 2014', yield: 169.8, spread: 40.57, price: 29.72 },
                { date: 'Feb 23, 2014', yield: 55.26, spread: 192.24, price: 122.58 },
                { date: 'Feb 24, 2014', yield: 179.07, spread: 188.76, price: 178.31 },
                { date: 'Feb 25, 2014', yield: 77.31, spread: 92.86, price: 57.37 },
                { date: 'Feb 26, 2014', yield: 52.45, spread: 80.81, price: 163.31 },
                { date: 'Feb 27, 2014', yield: 140.04, spread: 80.47, price: 34.88 },
                { date: 'Feb 28, 2014', yield: 196.36, spread: 173.22, price: 139.18 },
                { date: 'Mar 01, 2014', yield: 108.33, spread: 179.36, price: 69.8 },
                { date: 'Mar 02, 2014', yield: 136.83, spread: 186.86, price: 166.91 },
                { date: 'Mar 03, 2014', yield: 36.9, spread: 151.06, price: 97.34 },
                { date: 'Mar 04, 2014', yield: 26.32, spread: 172.6, price: 37.93 },
                { date: 'Mar 05, 2014', yield: 44.18, spread: 81.93, price: 94.59 },
                { date: 'Mar 06, 2014', yield: 43.78, spread: 136.84, price: 133.64 },
                { date: 'Mar 07, 2014', yield: 39.31, spread: 107.95, price: 183.56 },
                { date: 'Mar 08, 2014', yield: 23.29, spread: 167.83, price: 43.86 },
                { date: 'Mar 09, 2014', yield: 192.23, spread: 27.68, price: 65.42 },
                { date: 'Mar 10, 2014', yield: 113.6, spread: 120.54, price: 187.3 },
                { date: 'Mar 11, 2014', yield: 11.27, spread: 29.38, price: 78.48 },
                { date: 'Mar 12, 2014', yield: 76.63, spread: 96.58, price: 120.18 },
                { date: 'Mar 13, 2014', yield: 195.32, spread: 121.69, price: 145.88 },
                { date: 'Mar 14, 2014', yield: 198.02, spread: 102.41, price: 14.48 },
                { date: 'Mar 15, 2014', yield: 19.23, spread: 172.56, price: 44.38 },
                { date: 'Mar 16, 2014', yield: 34.68, spread: 22.48, price: 106.93 },
                { date: 'Mar 17, 2014', yield: 88.26, spread: 172.95, price: 24.48 },
                { date: 'Mar 18, 2014', yield: 15.24, spread: 10.77, price: 41.8 },
                { date: 'Mar 19, 2014', yield: 117.84, spread: 36.42, price: 164.66 },
                { date: 'Mar 20, 2014', yield: 90.26, spread: 155.95, price: 104.58 },
                { date: 'Mar 21, 2014', yield: 137.98, spread: 129.11, price: 70.4 },
                { date: 'Mar 22, 2014', yield: 100.24, spread: 97.67, price: 52.73 },
                { date: 'Mar 23, 2014', yield: 85.03, spread: 180.17, price: 78.08 },
                { date: 'Mar 24, 2014', yield: 40.88, spread: 16.81, price: 102.38 },
                { date: 'Mar 25, 2014', yield: 26.92, spread: 157.68, price: 64.6 },
                { date: 'Mar 26, 2014', yield: 102.94, spread: 103.68, price: 193.4 },
                { date: 'Mar 27, 2014', yield: 191.15, spread: 106.12, price: 170.45 },
                { date: 'Mar 28, 2014', yield: 156.83, spread: 70.21, price: 15.37 },
                { date: 'Mar 29, 2014', yield: 67.61, spread: 176.63, price: 109.58 },
                { date: 'Mar 30, 2014', yield: 103.81, spread: 181.67, price: 159.81 },
                { date: 'Mar 31, 2014', yield: 136.29, spread: 121.31, price: 106 },
                { date: 'Apr 01, 2014', yield: 107.6, spread: 176.49, price: 122.81 },
                { date: 'Apr 02, 2014', yield: 30.21, spread: 59.22, price: 17.22 },
                { date: 'Apr 03, 2014', yield: 42.41, spread: 181.79, price: 142.99 },
                { date: 'Apr 04, 2014', yield: 19.62, spread: 30.69, price: 72.43 },
                { date: 'Apr 05, 2014', yield: 92.48, spread: 79.18, price: 11.78 },
                { date: 'Apr 06, 2014', yield: 121.43, spread: 70.1, price: 125.1 },
                { date: 'Apr 07, 2014', yield: 177.15, spread: 154, price: 24.64 },
                { date: 'Apr 08, 2014', yield: 153.81, spread: 74.7, price: 70.64 },
                { date: 'Apr 09, 2014', yield: 117.97, spread: 192.27, price: 142.07 },
                { date: 'Apr 10, 2014', yield: 78.99, spread: 158.26, price: 186.85 },
                { date: 'Apr 11, 2014', yield: 13.97, spread: 129.45, price: 48.67 },
                { date: 'Apr 12, 2014', yield: 85.28, spread: 74.8, price: 116.02 },
                { date: 'Apr 13, 2014', yield: 143.65, spread: 138.59, price: 44.91 },
                { date: 'Apr 14, 2014', yield: 76.68, spread: 77.82, price: 90.6 },
                { date: 'Apr 15, 2014', yield: 157.31, spread: 149.2, price: 168.66 },
                { date: 'Apr 16, 2014', yield: 128.58, spread: 156.71, price: 125.87 },
                { date: 'Apr 17, 2014', yield: 172.72, spread: 120.9, price: 55.59 },
                { date: 'Apr 18, 2014', yield: 73.11, spread: 152.46, price: 198.82 },
                { date: 'Apr 19, 2014', yield: 147.53, spread: 75.36, price: 122.99 },
                { date: 'Apr 20, 2014', yield: 79.96, spread: 197.39, price: 148.2 },
                { date: 'Apr 21, 2014', yield: 78.75, spread: 100.3, price: 73.73 },
                { date: 'Apr 22, 2014', yield: 160.08, spread: 144.97, price: 24.53 },
                { date: 'Apr 23, 2014', yield: 186.48, spread: 142, price: 80.66 },
                { date: 'Apr 24, 2014', yield: 199.68, spread: 78, price: 173.66 },
                { date: 'Apr 25, 2014', yield: 183.77, spread: 56.59, price: 186.8 },
                { date: 'Apr 26, 2014', yield: 80.89, spread: 150.27, price: 163.86 },
                { date: 'Apr 27, 2014', yield: 183.14, spread: 98.15, price: 182.86 },
                { date: 'Apr 28, 2014', yield: 47.1, spread: 181.92, price: 198 },
                { date: 'Apr 29, 2014', yield: 31.69, spread: 85.98, price: 54.9 },
                { date: 'Apr 30, 2014', yield: 173.26, spread: 144.78, price: 105.67 },
                { date: 'May 01, 2014', yield: 148.79, spread: 61.35, price: 191.94 },
                { date: 'May 02, 2014', yield: 105.81, spread: 21.67, price: 191.78 },
                { date: 'May 03, 2014', yield: 91.7, spread: 66.28, price: 91.86 },
                { date: 'May 04, 2014', yield: 169.86, spread: 97.53, price: 73.31 },
                { date: 'May 05, 2014', yield: 157.63, spread: 99.35, price: 42.44 },
                { date: 'May 06, 2014', yield: 44.05, spread: 148.31, price: 142.01 },
                { date: 'May 07, 2014', yield: 72, spread: 48.79, price: 144.89 },
                { date: 'May 08, 2014', yield: 121.47, spread: 168.25, price: 161.54 },
                { date: 'May 09, 2014', yield: 159.95, spread: 75.64, price: 91.46 },
                { date: 'May 10, 2014', yield: 138.78, spread: 115.2, price: 190.78 },
                { date: 'May 11, 2014', yield: 68.3, spread: 77.27, price: 181.3 },
                { date: 'May 12, 2014', yield: 106.67, spread: 152.07, price: 164.17 },
                { date: 'May 13, 2014', yield: 18.35, spread: 165.35, price: 20.27 },
                { date: 'May 14, 2014', yield: 50.8, spread: 177.38, price: 57.73 },
                { date: 'May 15, 2014', yield: 145.32, spread: 140.08, price: 181.65 },
                { date: 'May 16, 2014', yield: 127.69, spread: 149.11, price: 53.03 },
                { date: 'May 17, 2014', yield: 85.85, spread: 168.25, price: 172.57 },
                { date: 'May 18, 2014', yield: 151.32, spread: 130.7, price: 186.53 },
                { date: 'May 19, 2014', yield: 134.92, spread: 56.74, price: 21.9 },
                { date: 'May 20, 2014', yield: 155.48, spread: 150.74, price: 22.63 },
                { date: 'May 21, 2014', yield: 180.79, spread: 151.37, price: 52.33 },
                { date: 'May 22, 2014', yield: 19.26, spread: 173.26, price: 56.94 },
                { date: 'May 23, 2014', yield: 49.88, spread: 123.68, price: 40 },
                { date: 'May 24, 2014', yield: 74.03, spread: 94.03, price: 99.17 },
                { date: 'May 25, 2014', yield: 197.34, spread: 114.69, price: 87.34 },
                { date: 'May 26, 2014', yield: 14.25, spread: 54.26, price: 189.63 },
                { date: 'May 27, 2014', yield: 18.81, spread: 176.89, price: 165.3 },
                { date: 'May 28, 2014', yield: 184.37, spread: 141.53, price: 193.09 },
                { date: 'May 29, 2014', yield: 71.44, spread: 168.87, price: 148.05 },
                { date: 'May 30, 2014', yield: 13.52, spread: 60.85, price: 155.23 },
                { date: 'May 31, 2014', yield: 168.99, spread: 24.39, price: 96.09 },
                { date: 'Jun 01, 2014', yield: 121.3, spread: 97.5, price: 82.47 },
                { date: 'Jun 02, 2014', yield: 189.2, spread: 115.44, price: 62.12 },
                { date: 'Jun 03, 2014', yield: 72.86, spread: 47.28, price: 145.12 },
                { date: 'Jun 04, 2014', yield: 188.45, spread: 21.04, price: 118.63 },
                { date: 'Jun 05, 2014', yield: 55.98, spread: 12.39, price: 19.87 },
                { date: 'Jun 06, 2014', yield: 150.18, spread: 112.93, price: 11.54 },
                { date: 'Jun 07, 2014', yield: 69, spread: 25.77, price: 63.86 },
                { date: 'Jun 08, 2014', yield: 62.61, spread: 88.77, price: 48.46 },
                { date: 'Jun 09, 2014', yield: 90.83, spread: 131.47, price: 61.17 },
                { date: 'Jun 10, 2014', yield: 107.97, spread: 41.1, price: 196.47 },
                { date: 'Jun 11, 2014', yield: 103.92, spread: 154.34, price: 57.64 },
                { date: 'Jun 12, 2014', yield: 62.95, spread: 79.5, price: 132.97 },
                { date: 'Jun 13, 2014', yield: 124.91, spread: 176.48, price: 116.71 },
                { date: 'Jun 14, 2014', yield: 126.14, spread: 58.69, price: 126.76 },
                { date: 'Jun 15, 2014', yield: 18.35, spread: 93.24, price: 61.63 },
                { date: 'Jun 16, 2014', yield: 106.02, spread: 132.83, price: 163.7 },
                { date: 'Jun 17, 2014', yield: 94.68, spread: 81.85, price: 167.49 },
                { date: 'Jun 18, 2014', yield: 28.44, spread: 178.34, price: 128 },
                { date: 'Jun 19, 2014', yield: 142.31, spread: 33.21, price: 186.8 },
                { date: 'Jun 20, 2014', yield: 151.83, spread: 178.44, price: 99.45 },
                { date: 'Jun 21, 2014', yield: 155.43, spread: 121.62, price: 37.82 },
                { date: 'Jun 22, 2014', yield: 35.09, spread: 142.57, price: 50.11 },
                { date: 'Jun 23, 2014', yield: 96.76, spread: 170.77, price: 182.94 },
                { date: 'Jun 24, 2014', yield: 16.85, spread: 61.1, price: 127.19 },
                { date: 'Jun 25, 2014', yield: 161.12, spread: 47.8, price: 98.23 },
                { date: 'Jun 26, 2014', yield: 18.86, spread: 149.09, price: 24.04 },
                { date: 'Jun 27, 2014', yield: 40.2, spread: 145.1, price: 143.72 },
                { date: 'Jun 28, 2014', yield: 36.77, spread: 69.38, price: 159.94 },
                { date: 'Jun 29, 2014', yield: 115.01, spread: 63.04, price: 158.08 },
                { date: 'Jun 30, 2014', yield: 163.28, spread: 83.65, price: 27.54 },
                { date: 'Jul 01, 2014', yield: 174.98, spread: 43.28, price: 64.2 },
                { date: 'Jul 02, 2014', yield: 171.11, spread: 178.73, price: 96.96 },
                { date: 'Jul 03, 2014', yield: 119.25, spread: 176.28, price: 82.74 },
                { date: 'Jul 04, 2014', yield: 89.55, spread: 176.21, price: 187.35 },
                { date: 'Jul 05, 2014', yield: 37.66, spread: 144.2, price: 14.03 },
                { date: 'Jul 06, 2014', yield: 20.07, spread: 116.07, price: 127.18 },
                { date: 'Jul 07, 2014', yield: 197.97, spread: 190.89, price: 55.94 },
                { date: 'Jul 08, 2014', yield: 158.25, spread: 150.14, price: 179.23 },
                { date: 'Jul 09, 2014', yield: 145.86, spread: 28.85, price: 93.39 },
                { date: 'Jul 10, 2014', yield: 62.63, spread: 15.27, price: 179.51 },
                { date: 'Jul 11, 2014', yield: 93.71, spread: 111.7, price: 17.17 },
                { date: 'Jul 12, 2014', yield: 29.23, spread: 150.83, price: 75.17 },
                { date: 'Jul 13, 2014', yield: 86.48, spread: 97.13, price: 41.88 },
                { date: 'Jul 14, 2014', yield: 191.76, spread: 35.84, price: 152.42 },
                { date: 'Jul 15, 2014', yield: 160.5, spread: 178.64, price: 78.11 },
                { date: 'Jul 16, 2014', yield: 136.4, spread: 123.06, price: 87.28 },
                { date: 'Jul 17, 2014', yield: 174.91, spread: 84.37, price: 190.23 },
                { date: 'Jul 18, 2014', yield: 120.88, spread: 23.01, price: 68.04 },
                { date: 'Jul 19, 2014', yield: 148.84, spread: 128.93, price: 109.28 },
                { date: 'Jul 20, 2014', yield: 137.45, spread: 130.42, price: 29.33 },
                { date: 'Jul 21, 2014', yield: 25, spread: 138.19, price: 174.22 },
                { date: 'Jul 22, 2014', yield: 116.86, spread: 135.5, price: 192.35 },
                { date: 'Jul 23, 2014', yield: 122.41, spread: 33.48, price: 106.98 },
                { date: 'Jul 24, 2014', yield: 106.64, spread: 100.72, price: 140.71 },
                { date: 'Jul 25, 2014', yield: 180.96, spread: 169.67, price: 198.59 },
                { date: 'Jul 26, 2014', yield: 23.85, spread: 136.92, price: 80.04 },
                { date: 'Jul 27, 2014', yield: 184.05, spread: 51.19, price: 197.66 },
                { date: 'Jul 28, 2014', yield: 184.48, spread: 15.79, price: 102.78 },
                { date: 'Jul 29, 2014', yield: 96.87, spread: 182.72, price: 199 },
                { date: 'Jul 30, 2014', yield: 152.68, spread: 93.24, price: 38.93 },
                { date: 'Jul 31, 2014', yield: 139.98, spread: 29.62, price: 181.32 },
                { date: 'Aug 01, 2014', yield: 51.91, spread: 109.11, price: 150.84 },
                { date: 'Aug 02, 2014', yield: 72.86, spread: 138, price: 179.55 },
                { date: 'Aug 03, 2014', yield: 18.49, spread: 194.82, price: 137.67 },
                { date: 'Aug 04, 2014', yield: 102.31, spread: 26.03, price: 192.57 },
                { date: 'Aug 05, 2014', yield: 138.53, spread: 34.49, price: 61.79 },
                { date: 'Aug 06, 2014', yield: 82.78, spread: 194.72, price: 178.65 },
                { date: 'Aug 07, 2014', yield: 112.23, spread: 147.8, price: 73.4 },
                { date: 'Aug 08, 2014', yield: 42.22, spread: 146.83, price: 43.22 },
                { date: 'Aug 09, 2014', yield: 165.04, spread: 37.19, price: 126.47 },
                { date: 'Aug 10, 2014', yield: 31.31, spread: 154.62, price: 16.54 },
                { date: 'Aug 11, 2014', yield: 63.85, spread: 83.64, price: 78.72 },
                { date: 'Aug 12, 2014', yield: 157.96, spread: 93.71, price: 144.13 },
                { date: 'Aug 13, 2014', yield: 24.71, spread: 161.19, price: 120.56 },
                { date: 'Aug 14, 2014', yield: 165.38, spread: 101.37, price: 51.1 },
                { date: 'Aug 15, 2014', yield: 63.99, spread: 91.37, price: 30.52 },
                { date: 'Aug 16, 2014', yield: 12.79, spread: 31.24, price: 149.05 },
                { date: 'Aug 17, 2014', yield: 91.14, spread: 153.61, price: 135.01 },
                { date: 'Aug 18, 2014', yield: 97.92, spread: 79.56, price: 105.28 },
                { date: 'Aug 19, 2014', yield: 168.62, spread: 60.14, price: 159.07 },
                { date: 'Aug 20, 2014', yield: 106.67, spread: 132.93, price: 55.98 },
                { date: 'Aug 21, 2014', yield: 109.27, spread: 28.01, price: 162.43 },
                { date: 'Aug 22, 2014', yield: 134.47, spread: 134.21, price: 40.36 },
                { date: 'Aug 23, 2014', yield: 175.36, spread: 187.4, price: 127.92 },
                { date: 'Aug 24, 2014', yield: 87.96, spread: 197.67, price: 175.13 },
                { date: 'Aug 25, 2014', yield: 38.07, spread: 115.09, price: 129.48 },
                { date: 'Aug 26, 2014', yield: 195.69, spread: 103.69, price: 47.47 },
                { date: 'Aug 27, 2014', yield: 161.77, spread: 159.63, price: 171.75 },
                { date: 'Aug 28, 2014', yield: 44.22, spread: 97.96, price: 133.31 },
                { date: 'Aug 29, 2014', yield: 19.91, spread: 160.96, price: 79.96 },
                { date: 'Aug 30, 2014', yield: 172.53, spread: 94.55, price: 181.81 },
                { date: 'Aug 31, 2014', yield: 151.08, spread: 21.16, price: 27.93 },
                { date: 'Sep 01, 2014', yield: 70.96, spread: 24.43, price: 75.69 },
                { date: 'Sep 02, 2014', yield: 168.17, spread: 185.29, price: 86.49 },
                { date: 'Sep 03, 2014', yield: 30.17, spread: 72.57, price: 60.93 },
                { date: 'Sep 04, 2014', yield: 68.98, spread: 46.38, price: 92.63 },
                { date: 'Sep 05, 2014', yield: 141.16, spread: 188.68, price: 86.92 },
                { date: 'Sep 06, 2014', yield: 14.16, spread: 146.68, price: 43.06 },
                { date: 'Sep 07, 2014', yield: 161.24, spread: 150.23, price: 76.31 },
                { date: 'Sep 08, 2014', yield: 27.16, spread: 18.25, price: 11.65 },
                { date: 'Sep 09, 2014', yield: 70.11, spread: 23.48, price: 132.85 },
                { date: 'Sep 10, 2014', yield: 77.48, spread: 191.13, price: 167.85 },
                { date: 'Sep 11, 2014', yield: 163.03, spread: 37.69, price: 47.13 },
                { date: 'Sep 12, 2014', yield: 157.59, spread: 58.36, price: 110.25 },
                { date: 'Sep 13, 2014', yield: 94.19, spread: 189.58, price: 91.65 },
                { date: 'Sep 14, 2014', yield: 65.32, spread: 19.15, price: 10.34 },
                { date: 'Sep 15, 2014', yield: 85.39, spread: 116.1, price: 20.8 },
                { date: 'Sep 16, 2014', yield: 82.05, spread: 184.94, price: 199.69 },
                { date: 'Sep 17, 2014', yield: 139.38, spread: 126.59, price: 77.3 },
                { date: 'Sep 18, 2014', yield: 46.83, spread: 141.2, price: 153.91 },
                { date: 'Sep 19, 2014', yield: 175.55, spread: 15.31, price: 165.79 },
                { date: 'Sep 20, 2014', yield: 81.94, spread: 133.89, price: 104.16 },
                { date: 'Sep 21, 2014', yield: 188.47, spread: 138.95, price: 149.59 },
                { date: 'Sep 22, 2014', yield: 21.09, spread: 42.6, price: 133.24 },
                { date: 'Sep 23, 2014', yield: 25.86, spread: 170, price: 173.72 },
                { date: 'Sep 24, 2014', yield: 13.61, spread: 118.02, price: 113.09 },
                { date: 'Sep 25, 2014', yield: 154.15, spread: 186.31, price: 90.34 },
                { date: 'Sep 26, 2014', yield: 78.91, spread: 185.21, price: 117.11 },
                { date: 'Sep 27, 2014', yield: 24.58, spread: 12.39, price: 178.23 },
                { date: 'Sep 28, 2014', yield: 149.85, spread: 35.21, price: 19.86 },
                { date: 'Sep 29, 2014', yield: 41.7, spread: 12.31, price: 48.22 },
                { date: 'Sep 30, 2014', yield: 73.08, spread: 80.04, price: 53.97 },
                { date: 'Oct 01, 2014', yield: 130.14, spread: 15.05, price: 47.43 },
                { date: 'Oct 02, 2014', yield: 134.12, spread: 15.94, price: 50.22 },
                { date: 'Oct 03, 2014', yield: 60.66, spread: 63.18, price: 185.54 },
                { date: 'Oct 04, 2014', yield: 71.09, spread: 180.29, price: 177.01 },
                { date: 'Oct 05, 2014', yield: 154.78, spread: 71.99, price: 198.67 },
                { date: 'Oct 06, 2014', yield: 176.4, spread: 178.63, price: 24.53 },
                { date: 'Oct 07, 2014', yield: 194.73, spread: 138.57, price: 150.29 },
                { date: 'Oct 08, 2014', yield: 104.98, spread: 25.29, price: 198.65 },
                { date: 'Oct 09, 2014', yield: 195.61, spread: 175.2, price: 164.91 },
                { date: 'Oct 10, 2014', yield: 148.63, spread: 80.92, price: 28.05 },
                { date: 'Oct 11, 2014', yield: 35.89, spread: 28.85, price: 144.46 },
                { date: 'Oct 12, 2014', yield: 52.47, spread: 149, price: 88.04 },
                { date: 'Oct 13, 2014', yield: 11.81, spread: 79.38, price: 55.31 },
                { date: 'Oct 14, 2014', yield: 117.52, spread: 68.95, price: 41.92 },
                { date: 'Oct 15, 2014', yield: 58.73, spread: 139.23, price: 151.57 },
                { date: 'Oct 16, 2014', yield: 194.49, spread: 23.86, price: 65.48 },
                { date: 'Oct 17, 2014', yield: 81.38, spread: 84.63, price: 52.47 },
                { date: 'Oct 18, 2014', yield: 140.14, spread: 92.73, price: 109.27 },
                { date: 'Oct 19, 2014', yield: 45.04, spread: 66.32, price: 31.88 },
                { date: 'Oct 20, 2014', yield: 91, spread: 26.66, price: 27.49 },
                { date: 'Oct 21, 2014', yield: 113.61, spread: 127.22, price: 175.09 },
                { date: 'Oct 22, 2014', yield: 123.57, spread: 185.46, price: 142.91 },
                { date: 'Oct 23, 2014', yield: 12.19, spread: 189.29, price: 184.12 },
                { date: 'Oct 24, 2014', yield: 60.39, spread: 16.33, price: 140.99 },
                { date: 'Oct 25, 2014', yield: 148.83, spread: 73.26, price: 63 },
                { date: 'Oct 26, 2014', yield: 148.25, spread: 29.32, price: 186.66 },
                { date: 'Oct 27, 2014', yield: 46.82, spread: 182.46, price: 109.47 },
                { date: 'Oct 28, 2014', yield: 50.82, spread: 55.76, price: 134.64 },
                { date: 'Oct 29, 2014', yield: 146.52, spread: 68.95, price: 42.15 },
                { date: 'Oct 30, 2014', yield: 161.2, spread: 60.3, price: 125.87 },
                { date: 'Oct 31, 2014', yield: 168.49, spread: 148.39, price: 39.59 },
                { date: 'Nov 01, 2014', yield: 165.22, spread: 61.1, price: 48.63 },
                { date: 'Nov 02, 2014', yield: 42.73, spread: 181.08, price: 57.81 },
                { date: 'Nov 03, 2014', yield: 45.02, spread: 60.23, price: 26.73 },
                { date: 'Nov 04, 2014', yield: 97.04, spread: 192.53, price: 183.02 },
                { date: 'Nov 05, 2014', yield: 62.1, spread: 157.75, price: 179.59 },
                { date: 'Nov 06, 2014', yield: 24.25, spread: 159.7, price: 129.87 },
                { date: 'Nov 07, 2014', yield: 89.79, spread: 14.02, price: 27.33 },
                { date: 'Nov 08, 2014', yield: 151.11, spread: 180.45, price: 137.33 },
                { date: 'Nov 09, 2014', yield: 107.3, spread: 146.22, price: 51.05 },
                { date: 'Nov 10, 2014', yield: 174.43, spread: 22.43, price: 147.55 },
                { date: 'Nov 11, 2014', yield: 84.39, spread: 183.33, price: 89.65 },
                { date: 'Nov 12, 2014', yield: 131.49, spread: 77.4, price: 179.3 },
                { date: 'Nov 13, 2014', yield: 32.52, spread: 83.51, price: 168.76 },
                { date: 'Nov 14, 2014', yield: 138.23, spread: 192.57, price: 88.37 },
                { date: 'Nov 15, 2014', yield: 14.25, spread: 147.34, price: 129.24 },
                { date: 'Nov 16, 2014', yield: 84.72, spread: 167.26, price: 195.56 },
                { date: 'Nov 17, 2014', yield: 69.6, spread: 129.47, price: 36.74 },
                { date: 'Nov 18, 2014', yield: 186.43, spread: 117.15, price: 131.01 },
                { date: 'Nov 19, 2014', yield: 125.56, spread: 158.07, price: 57.34 },
                { date: 'Nov 20, 2014', yield: 11.38, spread: 27.61, price: 100.22 },
                { date: 'Nov 21, 2014', yield: 62.67, spread: 153.96, price: 85.3 },
                { date: 'Nov 22, 2014', yield: 121.06, spread: 14.65, price: 97.01 },
                { date: 'Nov 23, 2014', yield: 100.22, spread: 53.49, price: 153.82 },
                { date: 'Nov 24, 2014', yield: 41.89, spread: 23.25, price: 70.01 },
                { date: 'Nov 25, 2014', yield: 158.41, spread: 172.9, price: 78.23 },
                { date: 'Nov 26, 2014', yield: 91.93, spread: 25.04, price: 23 },
                { date: 'Nov 27, 2014', yield: 74.92, spread: 135.36, price: 101.08 },
                { date: 'Nov 28, 2014', yield: 149.75, spread: 28.24, price: 124.55 },
                { date: 'Nov 29, 2014', yield: 47.56, spread: 116.37, price: 78.8 },
                { date: 'Nov 30, 2014', yield: 171.93, spread: 164.49, price: 130.06 },
                { date: 'Dec 01, 2014', yield: 40.03, spread: 13.55, price: 39.72 },
                { date: 'Dec 02, 2014', yield: 45.58, spread: 108.38, price: 103.1 },
                { date: 'Dec 03, 2014', yield: 144.51, spread: 117.4, price: 159.23 },
                { date: 'Dec 04, 2014', yield: 152.57, spread: 109.52, price: 52.53 },
                { date: 'Dec 05, 2014', yield: 94.34, spread: 15.54, price: 29.59 },
                { date: 'Dec 06, 2014', yield: 61.46, spread: 79.6, price: 127.99 },
                { date: 'Dec 07, 2014', yield: 16.66, spread: 186.91, price: 72.46 },
                { date: 'Dec 08, 2014', yield: 82.13, spread: 172.36, price: 25.07 },
                { date: 'Dec 09, 2014', yield: 84.99, spread: 80.68, price: 41.74 },
                { date: 'Dec 10, 2014', yield: 163.55, spread: 67.65, price: 149.7 },
                { date: 'Dec 11, 2014', yield: 158.28, spread: 58.82, price: 175.75 },
                { date: 'Dec 12, 2014', yield: 152.78, spread: 106.66, price: 49.18 },
                { date: 'Dec 13, 2014', yield: 184.73, spread: 57.29, price: 166.7 },
                { date: 'Dec 14, 2014', yield: 71, spread: 76.61, price: 109.66 },
                { date: 'Dec 15, 2014', yield: 193.17, spread: 143.44, price: 115.54 },
                { date: 'Dec 16, 2014', yield: 98.36, spread: 72.54, price: 141.9 },
                { date: 'Dec 17, 2014', yield: 128.59, spread: 31.66, price: 42.58 },
                { date: 'Dec 18, 2014', yield: 18.82, spread: 78.35, price: 61.2 },
                { date: 'Dec 19, 2014', yield: 123.06, spread: 183.78, price: 100.61 },
                { date: 'Dec 20, 2014', yield: 34.66, spread: 10.52, price: 196.95 },
                { date: 'Dec 21, 2014', yield: 29.66, spread: 78.45, price: 197.24 },
                { date: 'Dec 22, 2014', yield: 129.1, spread: 189, price: 151.35 },
                { date: 'Dec 23, 2014', yield: 130.65, spread: 102.1, price: 48.31 },
                { date: 'Dec 24, 2014', yield: 65.83, spread: 185.9, price: 163.07 },
                { date: 'Dec 25, 2014', yield: 21.45, spread: 165.73, price: 193.62 },
                { date: 'Dec 26, 2014', yield: 101.33, spread: 94.83, price: 106.77 },
                { date: 'Dec 27, 2014', yield: 25.4, spread: 32.45, price: 73.24 },
                { date: 'Dec 28, 2014', yield: 142.31, spread: 138.32, price: 164.51 },
                { date: 'Dec 29, 2014', yield: 163.25, spread: 171.67, price: 129.91 },
                { date: 'Dec 30, 2014', yield: 188.06, spread: 179.08, price: 77.43 },
                { date: 'Dec 31, 2014', yield: 147.2, spread: 125.72, price: 11.38 }
            ]

            angular.forEach(data, function (obj) {
                obj.date = Date.parse(obj.date);
            });

            return data.filter(function (obj) { return obj.date >= dateFrom && obj.date <= dateTo; });


        };
    });;

app.controller("stockChartController", ["$scope", "dataProviderService", function ($scope, dataProviderService) {

    $scope.shownRange = 'max';
    $scope.shownValueProp = 'yield';
    $scope.chartData = [];

    var getDataForChart = function(valueProp, range) {
        var minDate;
        var maxDate;

        switch (range) {
            case "week":
                minDate = Date.parse('Dec 21, 2014');
                maxDate = Date.parse('Dec 27, 2014');
                break;
            case "month":
                minDate = Date.parse('Dec 1, 2014');
                maxDate = Date.parse('Dec 31, 2014');
                break;
            case "quarter":
                minDate = Date.parse('Oct 1, 2014');
                maxDate = Date.parse('Dec 31, 2014');
                break;
            case "year":
                minDate = Date.parse('Jan 1, 2014');
                maxDate = Date.parse('Dec 31, 2014');
                break;
            case "max":
                minDate = new Date(-8640000000000000);
                maxDate = new Date();
                break;
            default:
                minDate = new Date(-8640000000000000);
                maxDate = new Date();
        }

        var source = dataProviderService.GetStockData(minDate, maxDate);

        return transformDataForChart(source, valueProp);
    };

    var transformDataForChart = function (source, valuePropName) {

        var transformedData = [];

        angular.forEach(source, function (obj) {
            var object = {
                date: obj.date,
                value: +obj[valuePropName]
            };

            transformedData.push(object);
        });

        return transformedData;
    }




    $scope.showYield = function() {
        $scope.shownValueProp = 'yield';
        $scope.chartData = getDataForChart($scope.shownValueProp, $scope.shownRange);
    }

    $scope.showSpread = function() {
        $scope.shownValueProp = 'spread';
        $scope.chartData = getDataForChart($scope.shownValueProp, $scope.shownRange);
    }

    $scope.showPrice = function() {
        $scope.shownValueProp = 'price';
        $scope.chartData = getDataForChart($scope.shownValueProp, $scope.shownRange);
    }

    $scope.changeRange = function(newRange) {
        $scope.shownRange = newRange;
        $scope.chartData = getDataForChart($scope.shownValueProp, $scope.shownRange);
    }


}]);;
app.directive("lineChart", ["$parse", function ($parse) {
       var directiveDefinitionObject = {
           restrict: 'E',
           replace: false,
           scope: { data: '=chartData' },
           link: function (scope, element, attrs) {

               var drawGraph = function (elem, source) {
                   var existingSvg = d3.select(elem[0]).select("svg");
                   if (existingSvg)
                       existingSvg.remove();


                   // Set the dimensions of the canvas / graph
                   var margin = { top: 30, right: 20, bottom: 30, left: 50 },
                       width = 600 - margin.left - margin.right,
                       height = 270 - margin.top - margin.bottom;

                   // Set the ranges
                   var x = d3.time.scale().range([0, width]);
                   var y = d3.scale.linear().range([height, 0]);

                   // Define the axes
                   var xAxis = d3.svg.axis().scale(x)
                       .orient("bottom").ticks(5);

                   var yAxis = d3.svg.axis().scale(y)
                       .orient("left").ticks(5);


                   // Define the line
                   var valueline = d3.svg.line()
                       .x(function (d) { return x(d.date); })
                       .y(function (d) { return y(d.value); });

                   // Adds the svg canvas
                   var svg = d3.select(elem[0])
                       .append("svg")
                           .attr("width", width + margin.left + margin.right)
                           .attr("height", height + margin.top + margin.bottom)
                       .append("g")
                           .attr("transform",
                                 "translate(" + margin.left + "," + margin.top + ")");


                   // Scale the range of the data
                   x.domain(d3.extent(source, function (d) { return d.date; }));
                   y.domain([0, d3.max(source, function (d) { return d.value; })]);

                   // Add the valueline path.
                   svg.append("path")
                       .attr("class", "line")
                       .attr("d", valueline(source));

                   // Add the X Axis
                   svg.append("g")
                       .attr("class", "x axis")
                       .attr("transform", "translate(0," + height + ")")
                       .call(xAxis);

                   // Add the Y Axis
                   svg.append("g")
                       .attr("class", "y axis")
                   .call(yAxis);
               };

               scope.$watch('data', function (newVal) {
                   if(newVal)
                        drawGraph(element, newVal);
               });

           }
       };
       return directiveDefinitionObject;
   }]);