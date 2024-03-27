//
// Created by adolph on 26/03/2024.
//


#include <iostream>
#include <vector>

using namespace std;

int main (){
cout<< "Hello" << endl;

vector <int> arr = {1, 3, 5, 7, 9, 11, 13, 15, 17, 19};
int target = 11;

int start =0;
int end = arr.size() -1;
int result = -1;

while(start <= end){
    int mid = start + (end - start)/2;

    if(arr.at(mid) == target){
        result = mid;
        break;
    }else if(arr.at(mid) < target){
        start = mid + 1;
    }else{
        end = mid - 1;
    }
}

    if(result != -1) {
        cout << "Target found at index: " << result << endl;
    } else {
        cout << "Target not found" << endl;
    }

    return 0;
}